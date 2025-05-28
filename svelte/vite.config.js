import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	base: '/love-u-festival/',
	plugins: [
		tailwindcss(),
		sveltekit(),
		VitePWA({
			injectRegister: 'auto',
			registerType: 'autoUpdate',
			devOptions: {
				enabled: false
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
						src: '/love-u-festival/img/icons/144.png',
						sizes: '144x144',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/love-u-festival/img/icons/192.png',
						sizes: '1024x1024',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/love-u-festival/img/icons/512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
					}
				]
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
				maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-stylesheets',
							expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
						}
					},
					{
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-webfonts',
							expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
						}
					}
				]
			}
		})
	]
});
