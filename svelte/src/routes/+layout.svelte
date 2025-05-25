<script>
	import '../styles/app.css';
	import '$lib/i18ns';
	import Navbar from '$/lib/components/layout/Navbar.svelte';
	import LanguageSwitcher from '$/lib/components/ui/LanguageSwitcher.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { registerSW } from 'virtual:pwa-register';

	if (browser) {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		onMount(() => {
			registerSW({
				onOfflineReady() {
					console.log('App is ready to work offline');
				}
			});
		});
	}
</script>

<Navbar />
<LanguageSwitcher />
<slot />
