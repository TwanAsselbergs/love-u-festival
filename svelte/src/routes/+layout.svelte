<script>
	import '../app.css';
	import '$lib/i18ns';
	import Navbar from '../components/Navbar.svelte';
	import LanguageSwitcher from '../components/LanguageSwitcher.svelte';

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
