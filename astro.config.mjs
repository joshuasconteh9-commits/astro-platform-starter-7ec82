import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:4321',
  server: {
    host: true,
    port: 4321,
  },
});
