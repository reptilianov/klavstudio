import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { relative, isAbsolute } from 'node:path';

// The gallery is discovered on each render. Reload the development page when
// an image or its editorial sidecar is added, removed, or edited.
function projectImageReload() {
  return {
    name: 'project-image-reload',
    configureServer(server) {
      const directory = fileURLToPath(new URL('./public/placeholders/', import.meta.url));
      let timer;
      const onFile = (event, file) => {
        const path = relative(directory, file);
        if (path.startsWith('..') || isAbsolute(path) || !/\.(webp|avif|jpe?g|png|svg|json)$/i.test(path)) return;
        if (!['add', 'change', 'unlink'].includes(event)) return;
        clearTimeout(timer);
        timer = setTimeout(() => server.ws.send({ type: 'full-reload' }), 150);
      };
      server.watcher.add(directory);
      server.watcher.on('all', onFile);
      server.httpServer?.once('close', () => {
        clearTimeout(timer);
        server.watcher.off('all', onFile);
      });
    },
  };
}

export default defineConfig({
  site: 'https://klav.design',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss(), projectImageReload()]
  }
});
