<script>
	import artists from '$lib/data/artists.json';
	import locations from '$lib/data/locations.json';
	import news from '$lib/data/news.json';
	import { t } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { assets, base } from '$app/paths';

	let showAllNews = false;

	$: sortedNews = news
		.slice()
		.sort(
			(a, b) =>
				new Date(b.date.split('-').reverse().join('-')) -
				new Date(a.date.split('-').reverse().join('-'))
		);

	function formatDate(date) {
		const options = { month: 'long', day: 'numeric' };
		return date.toLocaleDateString(undefined, options);
	}
	const today = new Date();
	$: todayString = `${formatDate(today)}`;

	let theme;

	onMount(() => {
		theme = localStorage.getItem('theme');
	});
</script>

<main class="pb-30 flex flex-col items-center gap-6 px-6 pt-20">
	<section class="flex w-full justify-between gap-4">
		<div class="bg-vermilion w-50 flex items-center justify-center gap-1.5 rounded-full p-1.5">
			<span class="material-icons-round text-white">location_on</span>
			<p class="mr-1 text-sm font-extrabold text-white">Strijkviertel, Utrecht</p>
		</div>
		{#if theme === 'dark'}
			<img
				src="{assets}/img/logos/logo-black-transparent.png"
				alt="Logo"
				class="h-10 w-10 rounded-full object-cover pl-0.5" />
		{:else}
			<img
				src="{assets}/img/logos/logo-white-transparent.png"
				alt="Logo"
				class="h-10 w-10 rounded-full object-cover pl-0.5" />
		{/if}
	</section>

	<section class="flex w-full flex-col gap-1">
		<p class="text-sm text-gray-400">{todayString}</p>
		<h1 class="sansation-bold text-xl text-gray-800 dark:text-white/90">{$t('welcome')}</h1>
		<button class="dark:bg-gray3 my-6 flex justify-center gap-2 rounded-full bg-gray-200 p-3.5">
			<span class="material-icons-round text-gray-400">search</span>
			<span class="text-gray-400">{$t('search_placeholder')}</span>
		</button>

		<p class="sansation-bold mb-4 text-lg text-gray-800 dark:text-white/90">
			{$t('festival_locations')}
		</p>
		<div class="scrollbar-none flex gap-4 overflow-x-auto">
			{#each locations as location}
				<div class="w-75 flex-shrink-0">
					<img
						src="{assets}{location.img}"
						alt="Hero"
						class="h-48 w-full rounded-3xl object-cover shadow" />
					<div class="flex items-center justify-between rounded-3xl">
						<div class="flex-col">
							<p class="sansation-bold mt-3.5 text-xl text-gray-800 dark:text-white/90">
								{location.title}
							</p>
							<p class="text-sm text-gray-400">{$t(location.desc)}</p>
						</div>
						<a href={location.spotify} target="_blank" rel="noopener noreferrer">
							<img src="{assets}/img/logos/spotify.svg" alt="Spotify" class="mr-1 h-7 w-7" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="flex w-full flex-col">
		<p class="sansation-bold mb-4 text-lg text-gray-800 dark:text-white/90">
			{$t('upcoming_artists')}
		</p>
		{#each artists.slice(0, 3) as artist}
			<div class="pb-5.5 flex">
				<img
					src="{assets}{artist.img}"
					alt="Artist"
					class="h-26 w-26 rounded-3xl object-cover shadow" />
				<div class="flex-col pl-4">
					<p class="sansation-bold pt-2 text-gray-800 dark:text-white/90">{$t(artist.song)}</p>
					<p class="text-sm text-gray-400">{$t(artist.artist)}</p>
					<div class="flex items-center gap-1 pt-4">
						<span class="material-icons-round text-saffron">watch_later</span>
						<p class="text-sm text-gray-400">{artist.date}</p>
					</div>
				</div>
			</div>
		{/each}
		<div class="flex justify-center">
			<a href="{base}/events" class="rounded-full pt-2">
				<p
					class="dark:bg-gray3 flex items-center rounded-full bg-gray-200 py-1 pl-4 pr-1 text-sm text-gray-400">
					{$t('see_schedule')}
					<span class="material-icons-round scale-85">keyboard_arrow_right</span>
				</p>
			</a>
		</div>
	</section>

	<section class="flex w-full flex-col">
		<p class="sansation-bold mb-4 text-lg text-gray-800 dark:text-white/90">{$t('news')}</p>
		<div
			class="overflow-hidden transition-all duration-500"
			style="max-height: {showAllNews ? `${sortedNews.length * 160 + 80}px` : '500px'}">
			{#each showAllNews ? sortedNews : sortedNews.slice(0, 3) as newsarticle (newsarticle.title + newsarticle.date)}
				<div class="mx-2">
					<div class="mb-6 flex flex-col items-center">
						<div class="dark:bg-gray3 w-full rounded-3xl bg-gray-200 px-4 py-4">
							<div class="text-vermilion mb-4 flex gap-1">
								<span class="material-icons-round scale-85">feed</span>
								<h2 class="sansation-bold text-vermilion">{$t(newsarticle.title)}</h2>
							</div>
							<p class="pb-4 text-gray-400">{$t(newsarticle.desc)}</p>
							<p class="text-xs">{newsarticle.date}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex justify-center">
			{#if !showAllNews}
				<button class="rounded-full pt-2" on:click={() => (showAllNews = true)}>
					<p
						class="dark:bg-gray3 flex items-center rounded-full bg-gray-200 py-1 pl-4 pr-1 text-sm text-gray-400">
						{$t('show_more')}
						<span class="material-icons-round scale-85">expand_more</span>
					</p>
				</button>
			{:else}
				<button class="rounded-full pt-2" on:click={() => (showAllNews = false)}>
					<p
						class="dark:bg-gray3 flex items-center rounded-full bg-gray-200 py-1 pl-4 pr-1 text-sm text-gray-400">
						{$t('show_less')}
						<span class="material-icons-round scale-85">expand_less</span>
					</p>
				</button>
			{/if}
		</div>
	</section>
</main>
