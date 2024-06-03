import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import glide from '@glidejs/glide';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), glide]
});