<script>
	import artists from '../data/artists.json';
	import highlights from '../data/highlights.json';
</script>

<main class="pb-30 flex flex-col items-center gap-6 px-6 pt-20">
	<section class="flex w-full justify-between gap-4">
		<div class="bg-vermilion w-50 flex items-center justify-center gap-1.5 rounded-full p-1.5">
			<span class="material-icons-round text-white">location_on</span>
			<p class="mr-1 text-sm font-extrabold text-white">Strijkviertel, Utrecht</p>
		</div>
		<img
			src="/img/logo-white-transparent.png"
			alt="Logo"
			class="h-10 w-10 rounded-full object-cover pl-0.5" />
	</section>

	<section class="flex w-full flex-col gap-1">
		<p class="text-sm text-gray-400">Today's May 14th</p>
		<h1 class="sansation-bold text-xl">Welcome, Student!</h1>
		<button class="my-6 flex justify-center gap-2 rounded-full bg-gray-200 p-3.5">
			<span class="material-icons-round text-gray-400">search</span>
			<span class="text-gray-400">Search by location or event</span>
		</button>

		<p class="sansation-bold mb-4 text-lg">Event Highlights</p>
		<div class="hide-scrollbar flex gap-4 overflow-x-auto">
			{#each highlights as highlight}
				<div class="w-75 flex-shrink-0">
					<img src={highlight.img} alt="Hero" class="h-48 w-full rounded-3xl object-cover" />
					<div class="flex items-center justify-between rounded-3xl">
						<div class="flex-col">
							<p class="sansation-bold mt-3.5 text-xl">{highlight.song}</p>
							<p class="text-sm text-gray-400">{highlight.artist}</p>
						</div>
						<a href={highlight.spotify} target="_blank" rel="noopener noreferrer">
							<img src="/img/spotify.svg" alt="Spotify" class="mr-1 h-7 w-7" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="flex w-full flex-col">
		<p class="sansation-bold mb-4 text-lg">Upcoming Artists</p>
		{#each artists.slice(0, 3) as artist}
			<div class="pb-5.5 flex">
				<img src={artist.img} alt="Artist" class="h-26 w-28 rounded-3xl object-cover" />
				<div class="flex-col pl-4">
					<p class="sansation-bold pt-2">{artist.song}</p>
					<p class="text-sm text-gray-400">{artist.artist}</p>
					<div class="flex items-center gap-1 pt-4">
						<span class="material-icons-round text-saffron">schedule</span>
						<p class="text-sm text-gray-400">{artist.date}</p>
					</div>
				</div>
			</div>
		{/each}
	</section>
</main>
