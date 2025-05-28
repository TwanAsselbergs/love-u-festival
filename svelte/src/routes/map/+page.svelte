<script>
	import FestivalMap from '$lib/components/map/FestivalMap.svelte';
	import { assets } from '$app/paths';
</script>

<main class="fixed inset-0 z-0 overflow-hidden">
	<FestivalMap />
	<img
		src="{assets}/img/map/legend.svg"
		alt=""
		class="absolute left-2 top-2 h-40 rounded-2xl shadow" />
</main>
