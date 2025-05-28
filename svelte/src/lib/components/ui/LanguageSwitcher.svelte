<script>
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { slide } from 'svelte/transition';
	import { assets } from '$app/paths';

	let currentLang = 'en';
	let isOpen = false;

	function switchLang(lang) {
		locale.set(lang);
		localStorage.setItem('language', lang);
		currentLang = lang;
		isOpen = false;
	}

	onMount(() => {
		const savedLang = localStorage.getItem('language');
		if (savedLang) {
			currentLang = savedLang;
			locale.set(savedLang);
		} else {
			locale.set('en');
		}
	});
</script>

<div class="right-5.5 absolute top-5 z-20 pr-[0.5px]">
	<button class="flex items-center gap-2 rounded p-2" on:click={() => (isOpen = !isOpen)}>
		<img
			src="{assets}/img/flags/{currentLang}.png"
			alt={currentLang}
			class="h-6 transition-transform duration-300 active:scale-90" />
	</button>
</div>

{#if isOpen}
	<div
		class="top-13 dark:bg-gray3 absolute right-5 z-20 mt-2 w-40 rounded-3xl bg-white/60 shadow backdrop-blur-lg dark:text-white/90"
		transition:slide={{ duration: 300 }}>
		<button
			class="pb- flex w-full items-center gap-3 px-4 py-4 text-left"
			on:click={() => switchLang('nl')}>
			<img src="{assets}/img/flags/nl.png" alt="Nederlands" class="h-6" />
			<span>Nederlands</span>
		</button>
		<button
			class="flex w-full items-center gap-3 px-4 pb-4 text-left"
			on:click={() => switchLang('en')}>
			<img src="{assets}/img/flags/en.png" alt="English" class="h-6" />
			<span>English</span>
		</button>
	</div>
{/if}
