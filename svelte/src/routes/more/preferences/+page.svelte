<script>
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

<main class="pb-30 flex flex-col items-center gap-6 px-6 pt-20">
	<section class="flex w-full flex-col gap-4">
		<h1 class="text-2xl font-extrabold text-gray-800">Voorkeuren</h1>
		<p class="text-gray-500">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dignissimos et repudiandae odio
			sit perspiciatis maxime cupiditate. Magni, tempora vero, nostrum voluptate dolor dolores
			voluptatum quibusdam soluta facilis voluptatem ducimus?
		</p>
	</section>

	<div class="w-full">
		<button on:click={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
	</div>
</main>
