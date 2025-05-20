<script>
	import artists from '../../data/artists.json';

	const stages = ['Main Stage', 'The Lake', 'The Club', 'Hangar'];
	const timeSlots = [
		'12:00',
		'12:15',
		'12:30',
		'12:45',
		'13:00',
		'13:15',
		'13:30',
		'13:45',
		'14:00',
		'14:15',
		'14:30',
		'14:45',
		'15:00',
		'15:15',
		'15:30',
		'15:45',
		'16:00',
		'16:15',
		'16:30',
		'16:45',
		'17:00'
	];

	function timeToMinutes(time) {
		const [h, m] = time.split(':').map(Number);
		return h * 60 + m;
	}

	const slotWidth = 120;
	const rowHeight = 80;
	const timeColWidth = slotWidth;

	function getArtistStyle(artist) {
		const stageIdx = stages.indexOf(artist.stage);
		const firstSlotMinutes = timeToMinutes(timeSlots[0]);
		const startMinutes = timeToMinutes(artist.start);
		const endMinutes = timeToMinutes(artist.end);

		if (stageIdx === -1 || isNaN(startMinutes) || isNaN(endMinutes)) return 'display:none';

		const top = ((startMinutes - firstSlotMinutes) / 15) * rowHeight + 40;
		const left = timeColWidth + stageIdx * slotWidth + slotWidth / 2 - slotWidth / 2;
		const width = slotWidth;
		const height = ((endMinutes - startMinutes) / 15) * rowHeight;
		const minHeight = 24;
		return `
      top: ${top}px;
      left: ${left}px;
      width: ${width}px;
      height: ${Math.max(height, minHeight)}px;
      opacity: 0.95;
    `;
	}

	function getStageBg(stage) {
		switch (stage) {
			case 'Main Stage':
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
		<h1 class="sansation-bold text-xl">Events</h1>
	</section>

	<section class="hide-scrollbar w-full overflow-x-auto overflow-y-hidden">
		<div class="relative min-w-[600px]">
			<table class="w-full">
				<thead>
					<tr>
						<th class="bg-gray-100 p-2 text-left">Time</th>
						{#each stages as stage}
							<th class="bg-gray-100">{stage}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each timeSlots as time}
						<tr style="height: {rowHeight}px;">
							<td class="align-top font-bold">{time}</td>
							{#each stages as stage}
								<td class="border-b border-t border-gray-400/25 p-5 align-top"></td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
			{#each artists as artist}
				{#if artist.start && artist.end}
					<div
						class={`rounded-4xl border-gray2 absolute flex flex-col items-start border-2 p-3 text-white ${getStageBg(artist.stage)}`}
						style={getArtistStyle(artist)}>
						<img src={artist.img} alt="Artist" class="mb-1 h-10 w-10 rounded-full object-cover" />
						<span class="font-semibold">{artist.artist}</span>
						<span class="text-xs text-white/80">{artist.song}</span>
					</div>
				{/if}
			{/each}
		</div>
	</section>
</main>
