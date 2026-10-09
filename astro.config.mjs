import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Cambia 'site' por el dominio real cuando lo tengáis
export default defineConfig({ site: 'https://suministrosanz.com', integrations: [sitemap()] });
