// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import { markdownRender } from './plugins/markdownRender';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
	},

  integrations: [react()],
  markdown: {
    rehypePlugins: [markdownRender],
  },
  site: 'https://syaad.dev',
});