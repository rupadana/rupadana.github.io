// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rupadana.github.io',
  vite: {
    preview: {
      allowedHosts: ['rupadana.codecrafters.id']
    }
  }
});
