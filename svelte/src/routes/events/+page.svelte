<script>
	import artists from '../../data/artists.json';

	const stages = ['Poton', 'The Lake', 'The Club', 'Hangar'];
	const timeSlots = [];

	for (let hour = 10; hour <= 23; hour++) {
		for (let min = 0; min < 60; min += 15) {
			const h = hour.toString().padStart(2, '0');
			const m = min.toString().padStart(2, '0');
			timeSlots.push(`${h}:${m}`);
		}
	}

	function timeToMinutes(time) {
		const [h, m] = time.split(':').map(Number);
		return h * 60 + m;
	}

	const slotWidth = 60;
	const rowHeight = 80;
	const timeColWidth = 100;

	let selectedDay = 'sat';
	$: filteredArtists = artists.filter((a) => a.day === selectedDay);

	function getHorizontalArtistStyle(artist) {
		const stageIdx = stages.indexOf(artist.stage);
		const startMinutes = timeToMinutes(artist.start);
		const endMinutes = timeToMinutes(artist.end);
		const firstSlotMinutes = timeToMinutes(timeSlots[0]);

		if (stageIdx === -1 || isNaN(startMinutes) || isNaN(endMinutes)) return 'display:none';

		const top = stageIdx * rowHeight;
		const left = ((startMinutes - firstSlotMinutes) / 15) * slotWidth;
		const width = ((endMinutes - startMinutes) / 15) * slotWidth;
		const minWidth = 40;

		return `
        top: ${top}px;
        left: ${left}px;
        width: ${Math.max(width, minWidth)}px;
        height: ${rowHeight - 10}px;
        opacity: 0.95;
    `;
	}

	function getStageBg(stage) {
		switch (stage) {
			case 'Poton':
				return 'bg-vermilion';
			case 'The Lake':
				return 'bg-cerulean';
			case 'The Club':
				return 'bg-saffron';
			case 'Hangar':
				return 'bg-purple-600';
		}
	}
</script>

<main class="pb-30 flex flex-col gap-6 px-6 pt-20">
	<section class="flex w-full justify-between gap-4">
		<div class="bg-vermilion w-50 flex items-center justify-center gap-1.5 rounded-full p-1.5">
			<span class="material-icons-round text-white">location_on</span>
			<p class="mr-1 text-sm font-extrabold text-white">Strijkviertel, Utrecht</p>
		</div>
		<img
			src="/img/logos/logo-white-transparent.png"
			alt="Logo"
			class="h-10 w-10 rounded-full object-cover pl-0.5" />
	</section>

	<section class="flex w-full flex-col gap-1">
		<p class="text-sm text-gray-400">Today's May 14th</p>
		<h1 class="sansation-bold text-xl">Events</h1>
	</section>

	<section class="mb-2 flex gap-4">
		<button
			class="sansation-bold rounded-full px-4 py-2 text-sm font-bold text-white"
			class:bg-vermilion={selectedDay === 'sat'}
			class:text-white={selectedDay === 'sat'}
			on:click={() => (selectedDay = 'sat')}>
			Saturday
		</button>
		<button
			class="sansation-bold rounded-full px-4 py-2 text-sm font-bold text-white"
			class:bg-vermilion={selectedDay === 'sun'}
			class:text-white={selectedDay === 'sun'}
			on:click={() => (selectedDay = 'sun')}>
			Sunday
		</button>
	</section>

	<section class="hide-scrollbar w-full overflow-x-auto overflow-y-hidden">
		<div
			class="relative"
			style={`height: ${stages.length * rowHeight + 60}px; min-width: ${timeSlots.length * slotWidth + 80}px`}>
			<div class="sticky z-10 flex">
				<div style={`width: ${timeColWidth}px`}></div>
				{#each timeSlots as time}
					<div
						class="border-b border-gray-300 bg-gray-100 py-2 text-center text-xs font-bold"
						style={`width: ${slotWidth}px`}>
						{time}
					</div>
				{/each}
			</div>

			<div class="absolute -left-5 top-8 z-10 flex flex-col">
				{#each stages as stage, i}
					<div
						class="sansation-bold flex items-center justify-end border-r border-gray-400/15 bg-gray-100 pr-2 text-sm font-semibold"
						style={`height: ${rowHeight}px; width: ${timeColWidth}px;`}>
						{stage}
						<span class={`ml-1 h-2 w-2 rounded-full ${getStageBg(stage)}`}></span>
					</div>
				{/each}
			</div>

			<div class="absolute left-[95px] right-0 top-9 z-0">
				{#each stages as _, i}
					<div
						class="border-t border-gray-400/15"
						style={`top: ${i * rowHeight + rowHeight}px; height: 0; position: absolute; width: 100%;`}>
					</div>
				{/each}
			</div>

			<div class="absolute top-10 ml-5" style={`left: ${timeColWidth}px;`}>
				{#each filteredArtists as artist}
					{#if artist.start && artist.end}
						<div
							class={`absolute flex items-center gap-2 rounded-full  p-3 text-white ${getStageBg(artist.stage)}`}
							style={getHorizontalArtistStyle(artist)}>
							<img src={artist.img} alt="Artist" class="mb-1 h-10 w-10 rounded-full object-cover" />
							<div class="flex flex-col">
								<h2 class="sansation-bold text-sm">{artist.artist}</h2>
								<p class="text-xs">{artist.start} tot {artist.end}</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</section>
</main>
