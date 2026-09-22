import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function prerender() {
  console.log('Starting pre-rendering...');

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base: '/chapter03/',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    let appHtml = render();

    const candidates = [
      path.resolve(root, 'dist', 'index.html'),
      path.resolve(root, 'dist', 'client', 'index.html'),
      path.resolve(root, 'dist', 'chapter03', 'index.html'),
    ];

    const indexPath = candidates.find((p) => fs.existsSync(p));
    if (!indexPath) {
      throw new Error(`Target index.html not found in candidates: ${candidates.join(', ')}`);
    }

    // Inspect dist/assets to map any raw asset references to hashed production assets
    const assetsDir = path.resolve(path.dirname(indexPath), 'assets');
    if (fs.existsSync(assetsDir)) {
      const assetFiles = fs.readdirSync(assetsDir);
      for (const file of assetFiles) {
        // e.g. ch3_hero_mountaineer_1788933358806-OtsBotZl.jpg
        const dotIdx = file.lastIndexOf('.');
        if (dotIdx !== -1) {
          const ext = file.slice(dotIdx);
          const nameWithHash = file.slice(0, dotIdx);
          const hyphenIdx = nameWithHash.lastIndexOf('-');
          if (hyphenIdx !== -1) {
            const baseName = nameWithHash.slice(0, hyphenIdx);
            // Replace /chapter03/src/.../baseName.ext or /src/.../baseName.ext
            const rawRegex = new RegExp(`(/chapter03)?/src/[^"']*?${baseName}${ext}`, 'g');
            appHtml = appHtml.replace(rawRegex, `/chapter03/assets/${file}`);
          }
        }
      }
    }

    let template = fs.readFileSync(indexPath, 'utf-8');

    // Also update any lingering references in index.html to old deleted hero image
    if (fs.existsSync(assetsDir)) {
      const heroFile = fs.readdirSync(assetsDir).find((f) => f.startsWith('ch3_hero_mountaineer'));
      if (heroFile) {
        template = template.replace(/ch3-hero-DIiQP4lg\.jpg/g, heroFile);
      }
    }

    const rootRegex = /<div id="root">[\s\S]*?<\/div>/;
    if (rootRegex.test(template)) {
      template = template.replace(rootRegex, `<div id="root">${appHtml}</div>`);
    } else {
      throw new Error('Could not find <div id="root"></div> in index.html template');
    }

    fs.writeFileSync(indexPath, template, 'utf-8');
    console.log(`Pre-rendered HTML successfully injected into ${indexPath}`);
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
