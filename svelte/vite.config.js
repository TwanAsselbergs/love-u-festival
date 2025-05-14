import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true
			},
			manifest: {
				name: 'Love U Festival',
				short_name: 'Love U Festival',
				description: 'Love U Festival is an app for its festival-goers.',
				theme_color: '#f2f3f6',
				background_color: '#f2f3f6',
				display: 'standalone',
				icons: [
					{
						src: '/icons/logo-white.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/icons/512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
					}
				],
				splash_pages: [
					{
						src: '/icons/logo-white.png',
						sizes: '192x192',
						type: 'image/png'
					}
				]
			}
		})
	]
});
