<script>
	import LanguageSwitcher from '../../components/LanguageSwitcher.svelte';
	import { t } from 'svelte-i18n';

	let darkMode = false;

	function toggleTheme() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<LanguageSwitcher />

<main class="pb-30 flex flex-col items-center gap-6 px-6 pt-20">
	<section class="flex w-full flex-col gap-4">
		<h1 class="text-vermilion text-2xl font-extrabold">Contact</h1>
		<p>How can we help you? Ask our digital colleague Pennenveer your question 24 hours a day.</p>

		<a href="tel:0655013388" class="border-vermilion text-vermilion border-1 rounded-2xl px-4 py-4">
			<div class="flex gap-4">
				<i class="material-icons-round">call</i>
				<p class="text-black">(06) 55 01 33 88</p>
			</div>
		</a>

		<a
			href="mailto:info@loveufestival.com"
			class="border-vermilion text-vermilion border-1 rounded-2xl px-4 py-4"
		>
			<div class="flex gap-4">
				<i class="material-icons-round">mail</i>
				<p class="text-black">info@loveufestival.com</p>
			</div>
		</a>
	</section>

	<section class="flex w-full flex-col gap-4">
		<h1 class="text-vermilion text-2xl font-extrabold">Practical Information</h1>

		<div class="flex w-full flex-col">
			<button
				class="border-vermilion text-vermilion border-1 rounded-2xl rounded-b-none border-b-0 px-4 py-4"
			>
				<div class="flex gap-4">
					<i class="material-icons-round">schedule</i>
					<p class="text-black">Opening hours</p>
				</div>
			</button>

			<div class="flex w-full flex-col">
				<button
					class="border-vermilion border-t-vermilion/10 border-b-vermilion/10 text-vermilion border-1 border-t-none border-b-none px-4 py-4"
				>
					<div class="flex gap-4">
						<i class="material-icons-round">accessible</i>
						<p class="text-black">Facilities for disabled visitors</p>
					</div>
				</button>

				<button
					class="border-vermilion text-vermilion border-1 border-t-vermilion/10 rounded-2xl rounded-t-none px-4 py-4"
				>
					<div class="flex gap-4">
						<i class="material-icons-round">badge</i>
						<p class="text-black">Apply for a facility card</p>
					</div>
				</button>
			</div>
		</div>
	</section>

	<section class="flex w-full flex-col gap-4">
		<h1 class="text-vermilion text-2xl font-extrabold">Settings & Preferences</h1>

		<div class="flex w-full flex-col">
			<button
				class="border-vermilion text-vermilion border-1 rounded-2xl rounded-b-none border-b-0 px-4 py-4"
			>
				<div class="flex gap-4">
					<i class="material-icons-round">settings</i>
					<p class="text-black">Preferences</p>
				</div>
			</button>

			<button
				class="border-vermilion text-vermilion border-1 border-t-vermilion/10 rounded-2xl rounded-t-none px-4 py-4"
			>
				<div class="flex gap-4">
					<i class="material-icons-round">info</i>
					<p class="text-black">About the Love U Festival app</p>
				</div>
			</button>
		</div>
	</section>

	<button on:click={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
</main>
