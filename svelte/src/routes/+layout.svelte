<script>
	import '../app.css';
	import '$lib/i18ns';
	import Navbar from '../components/Navbar.svelte';
	import LanguageSwitcher from '../components/LanguageSwitcher.svelte';

	if (typeof window !== 'undefined') {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<Navbar />
<LanguageSwitcher />
<slot />
