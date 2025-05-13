<script>
	import { t } from 'svelte-i18n';
</script>

<main class="pb-30 flex flex-col items-center gap-6 px-6 pt-20">
	<section class="flex w-full flex-col gap-4">
		<h1 class="text-2xl font-extrabold text-gray-800 dark:text-white/90">{$t('about')}</h1>
		<div class="dark:bg-gray3 rounded-2xl bg-white px-4 py-4">
			<div class="relative flex gap-4">
				<span class="material-icons-round text-vermilion">settings</span>
				<p class="text-gray-900 dark:text-white/90">{$t('app_version')}</p>
				<p class="absolute right-0 text-gray-300">0.0.1 (20251)</p>
			</div>
		</div>
		<a
			href="https://apps.apple.com/app/id123456789"
			target="_blank"
			rel="noopener noreferrer"
			class="dark:bg-gray3 rounded-2xl bg-white px-4 py-4">
			<div class="relative flex gap-4">
				<span class="material-icons-round text-vermilion">star</span>
				<p class="text-gray-900 dark:text-white/90">{$t('rate_app')}</p>
				<p class="material-icons-round absolute right-0 text-gray-300">open_in_new</p>
			</div>
		</a>
	</section>

	<section class="flex w-full flex-col gap-4">
		<h1 class="text-2xl font-extrabold text-gray-800 dark:text-white/90">{$t('terms')}</h1>

		<div class="flex w-full flex-col">
			<a href="/more/about" class="dark:bg-gray3 rounded-t-2xl bg-white px-4 py-4">
				<div class="relative flex gap-4">
					<span class="material-icons-round text-vermilion">balance</span>
					<p class="text-gray-900 dark:text-white/90">{$t('terms_conditions')}</p>
					<span class="material-icons-round absolute right-0 text-gray-300">
						keyboard_arrow_right
					</span>
				</div>
			</a>

			<a
				href="/more/about"
				class="border-1 dark:bg-gray3 border-l-0 border-r-0 border-gray-400/15 bg-white px-4 py-4">
				<div class="relative flex gap-4">
					<span class="material-icons-round text-vermilion">shield</span>
					<p class="text-gray-900 dark:text-white/90">{$t('privacy_statement')}</p>
					<span class="material-icons-round absolute right-0 text-gray-300">
						keyboard_arrow_right
					</span>
				</div>
			</a>

			<a href="/more/about" class="dark:bg-gray3 rounded-b-2xl bg-white px-4 py-4">
				<div class="relative flex gap-4">
					<span class="material-icons-round text-vermilion">assignment</span>
					<p class="text-gray-900 dark:text-white/90">{$t('licenses')}</p>
					<span class="material-icons-round absolute right-0 text-gray-300">
						keyboard_arrow_right
					</span>
				</div>
			</a>
		</div>
	</section>
</main>
