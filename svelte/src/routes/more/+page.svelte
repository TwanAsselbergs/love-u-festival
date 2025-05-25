<script>
	import { fly } from 'svelte/transition';
	import { t } from 'svelte-i18n';
	import { X } from 'lucide-svelte';
	import accessibilities from '$lib/data/accessibilities.json';
	import contacts from '$lib/data/contacts.json';

	let openSection = null;
	let selectedAccessibility = null;

	const openModal = (accessibility) => {
		selectedAccessibility = accessibility;
	};

	const closeModal = () => {
		selectedAccessibility = null;
	};

	const toggleSection = (section) => {
		openSection = openSection === section ? null : section;
	};
</script>

<main class="pb-30 flex flex-col items-center gap-6 px-6 pt-20">
	<section class="flex w-full flex-col gap-4">
		<h1 class="sansation-bold text-2xl text-gray-800 dark:text-white/90">
			{$t('contact')}
		</h1>
		<p class="text-gray-500">
			{$t('contact_desc')}
		</p>

		{#each contacts as contact}
			<a href={contact.href} class="text-vermilion dark:bg-gray3 rounded-full bg-white px-4 py-4">
				<div class="flex gap-4">
					<span class="material-icons-round">{contact.icon}</span>
					<p>{contact.content}</p>
				</div>
			</a>
		{/each}
	</section>

	<section class="flex w-full flex-col gap-4">
		<h1 class="sansation-bold text-2xl text-gray-800 dark:text-white/90">{$t('festival_info')}</h1>
		<p class="text-gray-500">
			{$t('festival_info_desc')}
		</p>

		<div class="flex w-full flex-col">
			<div class="dark:bg-gray3 rounded-t-2xl bg-white">
				<button
					on:click={() => toggleSection('openingHours')}
					class="flex w-full items-center justify-between px-4 py-4">
					<div class="flex items-center gap-4">
						<span class="material-icons-round text-vermilion">schedule</span>
						<p class="text-gray-900 dark:text-white/90">{$t('opening_hours')}</p>
					</div>
					<span
						class="material-icons-round text-gray-300 transition-transform duration-300"
						class:rotate-180={openSection === 'openingHours'}>
						keyboard_arrow_down
					</span>
				</button>

				<div
					class="flex flex-col gap-4 overflow-hidden px-5 transition-all duration-500 ease-in-out"
					style="max-height: {openSection === 'openingHours' ? '200px' : '0px'}">
					<p class="text-gray-600 dark:text-white/70">
						{$t('opening_hours_desc')}
					</p>
					<p class="pb-4 dark:text-white/90">
						Tip: <a href="/ics/love-u-festival.ics" download class="text-cerulean underline">
							{$t('opening_hours_tip')}
						</a>
					</p>
				</div>
			</div>

			<div class="dark:bg-gray3 bg-white">
				<button
					on:click={() => toggleSection('accessibility')}
					class="border-t-1 flex w-full items-center justify-between border-gray-400/15 px-4 py-4">
					<div class="flex items-center gap-4">
						<span class="material-icons-round text-vermilion">pedal_bike</span>
						<p class="text-gray-900 dark:text-white/90">{$t('accessibility')}</p>
					</div>
					<span
						class="material-icons-round text-gray-300 transition-transform duration-300"
						class:rotate-180={openSection === 'accessibility'}>
						keyboard_arrow_down
					</span>
				</button>

				<div
					class="flex flex-col gap-4 overflow-hidden px-5 transition-all duration-500 ease-in-out"
					style="max-height: {openSection === 'accessibility' ? '300px' : '0px'}">
					<p class="pb-2 text-gray-600 dark:text-white/70">
						Met welk vervoer ben je van plan te komen?
					</p>
					<div class="grid grid-cols-3 justify-items-center gap-12 px-4 pb-6">
						{#each accessibilities as accessibility}
							<button
								on:click={() => openModal(accessibility)}
								class="flex flex-col items-center gap-2 focus:outline-none">
								<span class="material-icons-round text-vermilion scale-150">
									{accessibility.icon}
								</span>
								<p class="">{accessibility.title}</p>
							</button>
						{/each}
					</div>
				</div>
			</div>

			<div class="dark:bg-gray3 bg-white">
				<button
					on:click={() => toggleSection('goldenGlu')}
					class="border-t-1 flex w-full items-center justify-between border-gray-400/15 px-4 py-4">
					<div class="flex items-center gap-4">
						<span class="material-icons-round text-vermilion">lock</span>
						<p class="text-gray-900 dark:text-white/90">{$t('lockers')}</p>
					</div>
					<span
						class="material-icons-round text-gray-300 transition-transform duration-300"
						class:rotate-180={openSection === 'goldenGlu'}>
						keyboard_arrow_down
					</span>
				</button>

				<div
					class="flex flex-col gap-4 overflow-hidden px-5 transition-all duration-500 ease-in-out"
					style="max-height: {openSection === 'goldenGlu' ? '250px' : '0px'}">
					<p class="pb-4 text-gray-600 dark:text-white/70">
						{$t('lockers_desc')}
						<br />
						<br />
						{$t('lockers_desc_2')}
					</p>
				</div>
			</div>

			<div class="dark:bg-gray3 rounded-b-2xl bg-white">
				<button
					on:click={() => toggleSection('lockers')}
					class="border-t-1 flex w-full items-center justify-between border-gray-400/15 px-4 py-4">
					<div class="flex items-center gap-4">
						<span class="material-icons-round text-saffron">workspace_premium</span>
						<p class="text-gray-900 dark:text-white/90">{$t('golden_glu_info')}</p>
					</div>
					<span
						class="material-icons-round text-gray-300 transition-transform duration-300"
						class:rotate-180={openSection === 'lockers'}>
						keyboard_arrow_down
					</span>
				</button>

				<div
					class="flex flex-col gap-4 overflow-hidden px-5 transition-all duration-500 ease-in-out"
					style="max-height: {openSection === 'lockers' ? '250px' : '0px'}">
					<p class="pb-4 text-gray-600 dark:text-white/70">
						{$t('golden_glu_info_desc')}
						<br />
						<br />
						{$t('golden_glu_info_desc_2')}
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="flex w-full flex-col gap-4">
		<h1 class="sansation-bold text-2xl text-gray-800 dark:text-white/90">{$t('faq')}</h1>

		<div class="flex w-full flex-col">
			<div class="dark:bg-gray3 rounded-t-2xl bg-white">
				<button
					on:click={() => toggleSection('medication')}
					class="flex w-full items-center justify-between px-4 py-4">
					<div class="flex items-center gap-4">
						<span class="material-icons-round text-vermilion">vaccines</span>
						<p class="text-gray-900 dark:text-white/90">{$t('medication')}</p>
					</div>
					<span
						class="material-icons-round text-gray-300 transition-transform duration-300"
						class:rotate-180={openSection === 'medication'}>
						keyboard_arrow_down
					</span>
				</button>

				<div
					class="flex flex-col gap-4 overflow-hidden px-5 transition-all duration-700 ease-in-out"
					style="max-height: {openSection === 'medication' ? '500px' : '0px'}">
					<p class="pb-4 text-gray-600 dark:text-white/70">
						{$t('medication_desc')}
						<br />
						<br />
						{$t('medication_desc_2')}
					</p>
				</div>
			</div>

			<div class="dark:bg-gray3 bg-white">
				<button
					on:click={() => toggleSection('leaveFestival')}
					class="border-t-1 flex w-full items-center justify-between border-gray-400/15 px-4 py-4">
					<div class="flex items-center gap-4">
						<span class="material-icons-round text-vermilion">outbound</span>
						<p class="text-gray-900 dark:text-white/90">{$t('leave_festival')}</p>
					</div>
					<span
						class="material-icons-round text-gray-300 transition-transform duration-300"
						class:rotate-180={openSection === 'leaveFestival'}>
						keyboard_arrow_down
					</span>
				</button>

				<div
					class="flex flex-col gap-4 overflow-hidden px-5 transition-all duration-500 ease-in-out"
					style="max-height: {openSection === 'leaveFestival' ? '400px' : '0px'}">
					<p class="pb-4 text-gray-600 dark:text-white/70">
						{$t('leave_festival_desc')}
						<br />
						<br />
						{$t('leave_festival_desc_2')}
					</p>
				</div>
			</div>

			<div class="dark:bg-gray3 rounded-b-2xl bg-white">
				<button
					on:click={() => toggleSection('faqLockers')}
					class="border-t-1 flex w-full items-center justify-between border-gray-400/15 px-4 py-4">
					<div class="flex items-center gap-4">
						<span class="material-icons-round text-vermilion">lock</span>
						<p class="text-gray-900 dark:text-white/90">{$t('lockers_info')}</p>
					</div>
					<span
						class="material-icons-round text-gray-300 transition-transform duration-300"
						class:rotate-180={openSection === 'faqLockers'}>
						keyboard_arrow_down
					</span>
				</button>

				<div
					class="flex flex-col gap-4 overflow-hidden px-5 transition-all duration-500 ease-in-out"
					style="max-height: {openSection === 'faqLockers' ? '250px' : '0px'}">
					<p class="pb-4 text-gray-600 dark:text-white/70">
						{$t('lockers_info_desc')}
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="flex w-full flex-col gap-4">
		<h1 class="sansation-bold text-2xl text-gray-800 dark:text-white/90">
			{$t('settings_preferences')}
		</h1>

		<div class="flex w-full flex-col">
			<a href="/more/preferences" class="dark:bg-gray3 rounded-t-2xl bg-white px-4 py-4">
				<div class="relative flex gap-4">
					<span class="material-icons-round text-vermilion">settings</span>
					<p class="text-gray-900 dark:text-white/90">{$t('preferences')}</p>
					<span class="material-icons-round absolute right-0 text-gray-300">
						keyboard_arrow_right
					</span>
				</div>
			</a>

			<a
				href="/more/about"
				class="border-1 dark:bg-gray3 rounded-b-2xl border-b-0 border-l-0 border-r-0 border-gray-400/15 bg-white px-4 py-4">
				<div class="relative flex gap-4">
					<span class="material-icons-round text-vermilion">info</span>
					<p class="text-gray-900 dark:text-white/90">{$t('about_app')}</p>
					<span class="material-icons-round absolute right-0 text-gray-300">
						keyboard_arrow_right
					</span>
				</div>
			</a>
		</div>
	</section>

	<p class="text-xs font-extralight text-gray-400">❤️ U Festival 0.0.1</p>

	<div
		class="fixed inset-0 z-40 bg-black transition-opacity duration-500 ease-in-out"
		class:opacity-20={selectedAccessibility}
		class:opacity-0={!selectedAccessibility}
		class:pointer-events-none={!selectedAccessibility}>
	</div>
	{#if selectedAccessibility}
		<div
			class="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center"
			transition:fly={{ y: 400, duration: 500, opacity: 1 }}>
			<div
				class="scrollbar-hide relative flex max-h-[80vh] w-full flex-col gap-2 overflow-y-auto rounded-t-3xl bg-white p-5 shadow">
				<button
					on:click={closeModal}
					class="absolute right-3 top-3 rounded-full bg-gray-200 p-1 text-gray-400">
					<X class="h-4 w-4 stroke-[4]" />
				</button>
				<div class="flex items-center gap-4">
					<span class="material-icons-round text-vermilion">{selectedAccessibility.icon}</span>
					<h2 class="sansation-bold">
						Kom je met de <span class="lowercase">{selectedAccessibility.title}?</span>
					</h2>
				</div>
				<p class="">{selectedAccessibility.desc}</p>
			</div>
		</div>
	{/if}
</main>
