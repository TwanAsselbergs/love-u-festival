<script>
	import '../app.css';
	import '$lib/i18ns';
	import Navbar from '../components/Navbar.svelte';
	import LanguageSwitcher from '../components/LanguageSwitcher.svelte';
</script>

<Navbar />
<LanguageSwitcher />
<slot />
