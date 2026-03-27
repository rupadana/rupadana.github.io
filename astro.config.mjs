// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    preview: {
      allowedHosts: ['rupadana.codecrafters.id']
    }
  }
});

export default defineConfig({ site: 'https://rupadana.github.io' });
