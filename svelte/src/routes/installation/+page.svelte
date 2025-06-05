<script>
	import { onMount, onDestroy } from 'svelte';

	let deferredPrompt = null;
	let canInstall = false;

	function handleBeforeInstallPrompt(e) {
		e.preventDefault();
		deferredPrompt = e;
		canInstall = true;
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		}
	});

	async function installApp() {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			deferredPrompt = null;
			canInstall = false;
		}
	}
</script>

<main class="pb-30 flex min-h-screen flex-col items-center justify-center gap-6 px-6">
	<section class="flex h-full w-full flex-col items-center">
		<span class="material-icons-round text-vermilion icon-lg">get_app</span>
		<h1 class="sansation-bold text-2xl text-gray-800 dark:text-white/90">Installation</h1>
		<p class="px-4 pb-6 pt-2 text-center text-gray-400">
			Download the Love U Festival app by using the install button below.
		</p>
		<button
			on:click={installApp}
			disabled={!canInstall}
			class="text-vermilion dark:bg-gray3 rounded-full bg-white px-6 py-4">
			<div class="flex items-center justify-center gap-4">
				<span class="material-icons-round">get_app</span>
				<p>Install the App</p>
			</div>
		</button>
	</section>
</main>
