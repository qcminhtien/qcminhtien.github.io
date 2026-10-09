import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function syncOriginalBannerFile() {
  const rootCandidates = [
    path.resolve(__dirname, 'minh tien ba hon.png'),
    path.resolve(__dirname, 'minh-tien-ba-hon.png'),
    path.resolve(__dirname, 'Minh tien ba hon.png'),
  ];
  const targetPath = path.resolve(__dirname, 'public/assets/minh-tien-ba-hon.png');

  for (const candidate of rootCandidates) {
    if (fs.existsSync(candidate)) {
      try {
        fs.mkdirSync(path.dirname(targetPath), {recursive: true});
        const srcStat = fs.statSync(candidate);
        const destExists = fs.existsSync(targetPath);
        if (!destExists || fs.statSync(targetPath).size !== srcStat.size) {
          fs.copyFileSync(candidate, targetPath);
        }
        return true;
      } catch {
        // Ignore copy error
      }
    }
  }
  return fs.existsSync(targetPath);
}

function originalBannerPlugin(): Plugin {
  return {
    name: 'original-banner-plugin',
    buildStart() {
      syncOriginalBannerFile();
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();

        const cleanUrl = decodeURIComponent(req.url.split('?')[0]);

        if (
          cleanUrl === '/assets/minh-tien-ba-hon.png' ||
          cleanUrl === '/minh tien ba hon.png' ||
          cleanUrl === '/api/banner-ba-hon-status'
        ) {
          syncOriginalBannerFile();
        }

        if (cleanUrl === '/api/banner-ba-hon-status' && req.method === 'GET') {
          const targetPath = path.resolve(__dirname, 'public/assets/minh-tien-ba-hon.png');
          const exists = fs.existsSync(targetPath);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({exists}));
          return;
        }

        if (cleanUrl === '/api/upload-banner-ba-hon' && req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk: Buffer) => chunks.push(chunk));
          req.on('end', () => {
            try {
              const rawBuffer = Buffer.concat(chunks);
              const targetPublic = path.resolve(__dirname, 'public/assets/minh-tien-ba-hon.png');
              const targetRoot = path.resolve(__dirname, 'minh tien ba hon.png');
              fs.mkdirSync(path.dirname(targetPublic), {recursive: true});
              fs.writeFileSync(targetPublic, rawBuffer);
              fs.writeFileSync(targetRoot, rawBuffer);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ok: true, size: rawBuffer.length}));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ok: false, error: String(err)}));
            }
          });
          return;
        }

        if (cleanUrl === '/assets/minh-tien-ba-hon.png' || cleanUrl === '/minh tien ba hon.png') {
          const targetPublic = path.resolve(__dirname, 'public/assets/minh-tien-ba-hon.png');
          if (fs.existsSync(targetPublic)) {
            res.setHeader('Content-Type', 'image/png');
            res.setHeader('Cache-Control', 'no-cache');
            fs.createReadStream(targetPublic).pipe(res);
            return;
          }
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), originalBannerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
