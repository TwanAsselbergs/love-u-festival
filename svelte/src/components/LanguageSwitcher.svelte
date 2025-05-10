<script>
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { slide } from 'svelte/transition';

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

<div class="absolute right-5 top-5 z-20">
	<button
		class="flex items-center gap-2 rounded bg-white/75 p-2 backdrop-blur"
		on:click={() => (isOpen = !isOpen)}
	>
		<img src={`/img/flags/${currentLang}.png`} alt={currentLang} class="h-6" />
	</button>
</div>

{#if isOpen}
	<div
		class="top-13 absolute right-5 mt-2 w-40 rounded-3xl bg-white shadow"
		transition:slide={{ duration: 300 }}
	>
		<button
			class="flex w-full items-center gap-3 px-4 py-4 text-left"
			on:click={() => switchLang('en')}
		>
			<img src="/img/flags/en.png" alt="English" class="h-6" />
			<span>English</span>
		</button>
		<button
			class="pb- flex w-full items-center gap-3 px-4 pb-4 text-left"
			on:click={() => switchLang('nl')}
		>
			<img src="/img/flags/nl.png" alt="English" class="h-6" />
			<span>Nederlands</span>
		</button>
		<button
			class="flex w-full items-center gap-3 px-4 pb-4 text-left"
			on:click={() => switchLang('de')}
		>
			<img src="/img/flags/de.png" alt="English" class="h-6" />
			<span>Deutsch</span>
		</button>
	</div>
{/if}
