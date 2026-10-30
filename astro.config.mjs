import { defineConfig } from 'astro/config';

// Configuration supporting GitHub Pages root or subpath deployment
// Override via environment variables if deployed to a repo subpath, e.g. BASE_PATH=/my-repo/
const site = (process.env.SITE || 'https://vinhthinh.github.io').trim();
const base = (process.env.BASE_PATH || '/').trim();

// https://astro.build/config
export default defineConfig({
  site,
  base,
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
