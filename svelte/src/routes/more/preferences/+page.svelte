<script>
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let tipsEnabled = false;
	let surveysEnabled = false;
	let darkMode = false;

	onMount(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			darkMode = true;
			document.documentElement.classList.add('dark');
		} else {
			darkMode = false;
			document.documentElement.classList.remove('dark');
		}
	});

	function toggleTheme() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<main class="pb-30 flex flex-col items-center gap-6 px-6 pt-20">
	<section class="flex w-full flex-col gap-4">
		<h1 class="text-2xl font-extrabold text-gray-800 dark:text-white/90">Notifications</h1>

		<div class="flex w-full flex-col">
			<div class="dark:bg-gray3 rounded-t-2xl bg-white px-4 py-4">
				<div class="relative flex items-center justify-between gap-4">
					<div class="flex flex-col">
						<p class="text-gray-900 dark:text-white/90">Tips and Promotions</p>
						<p class="pl-0.5 pt-1 text-sm text-gray-500 dark:text-white/90">
							You will receive notifications with tips and promotions during your visit.
						</p>
					</div>

					<label class="relative inline-flex cursor-pointer items-center">
						<input type="checkbox" bind:checked={tipsEnabled} class="peer sr-only" />
						<div
							class="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-green-600">
						</div>
						<div
							class="absolute left-0.5 top-0.5 h-5 w-5 transform rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5">
						</div>
					</label>
				</div>
			</div>

			<div
				class="border-1 dark:bg-gray3 border-l-0 border-r-0 border-gray-400/15 bg-white px-4 py-4">
				<div class="relative flex items-center justify-between gap-4">
					<div class="flex flex-col">
						<p class="text-gray-900 dark:text-white/90">Surveys</p>
						<p class="pl-0.5 pt-1 text-sm text-gray-500 dark:text-white/90">
							Help us by telling us about your experience.
						</p>
					</div>

					<label class="relative inline-flex cursor-pointer items-center">
						<input type="checkbox" bind:checked={surveysEnabled} class="peer sr-only" />
						<div
							class="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-green-600">
						</div>
						<div
							class="absolute left-0.5 top-0.5 h-5 w-5 transform rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5">
						</div>
					</label>
				</div>
			</div>

			<div class="dark:bg-gray3 rounded-b-2xl bg-white px-4 py-4">
				<div class="relative flex gap-4">
					<p class="text-gray-900 dark:text-white/90">E-mail notifications</p>
					<span class="material-icons-round absolute right-0 text-gray-300">
						keyboard_arrow_right
					</span>
				</div>
			</div>
		</div>
	</section>

	<section class="flex w-full flex-col gap-4">
		<h1 class="text-2xl font-extrabold text-gray-800 dark:text-white/90">Theme</h1>
		<div class="dark:bg-gray3 rounded-2xl bg-white px-4 py-4">
			<div class="relative flex items-start gap-4">
				<span class="material-icons-round text-vermilion">contrast</span>
				<p class="text-gray-900 dark:text-white/90">Dark Mode</p>
				<label class="absolute right-0 inline-flex cursor-pointer items-center">
					<input
						on:click={toggleTheme}
						bind:checked={darkMode}
						type="checkbox"
						class="peer sr-only" />
					<div
						class="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-green-600">
					</div>
					<div
						class="absolute left-0.5 top-0.5 h-5 w-5 transform rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5">
					</div>
				</label>
			</div>
		</div>
	</section>
</main>
