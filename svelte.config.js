import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$icons:  './src/lib/components/Icons/*',
			$widgets: './src/lib/widgets/*',
			$helpers: './src/lib/helpers/*',
			$layouts: './src/lib/layouts/*',
			$server: './src/lib/server/*',
			$components: './src/lib/components/*',
			$store: './src/lib/store.ts',
		}
	}
};

export default config;
