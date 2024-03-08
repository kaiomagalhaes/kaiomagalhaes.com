import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import md from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  preprocess: [vitePreprocess(), md.mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter(),

    csp: {
      mode: 'hash',
      directives: {
        'script-src': [
          'self',
          'sha256-0/bmvInFLm55DLyOqM1DCdJLpS1kxiBLUbaiWlglqLU='
        ],
        'connect-src': ['self'],
        'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
      },
    },
  },
};

export default config;