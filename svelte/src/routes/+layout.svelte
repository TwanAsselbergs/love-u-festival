<script>
	import '../styles/app.css';
	import '$lib/i18ns';
	import { isLoading } from 'svelte-i18n';
	import LanguageSwitcher from '$lib/components/ui/LanguageSwitcher.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import { page } from '$app/stores';

	$: hideNavbar =
		$page.url.pathname === '/installation' || $page.url.pathname === '/installation.html';
</script>

{#if !hideNavbar}
	<Navbar />
	<LanguageSwitcher />
{/if}

{#if !$isLoading}
	<slot />
{:else}
	<div class="flex h-screen w-full items-center justify-center"></div>
{/if}
