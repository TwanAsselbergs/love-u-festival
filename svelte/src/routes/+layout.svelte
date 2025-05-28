<script>
	import '../styles/app.css';
	import '$lib/i18ns';
	import { isLoading } from 'svelte-i18n';
	import LanguageSwitcher from '$lib/components/ui/LanguageSwitcher.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<Navbar />
<LanguageSwitcher />

{#if !$isLoading}
	<slot />
{:else}
	<div class="flex h-screen w-full items-center justify-center"></div>
{/if}
