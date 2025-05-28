<script>
	import { page } from '$app/stores';
	import { onMount, tick } from 'svelte';
	import { base } from '$app/paths';

	const navItems = [
		{ href: '/', icon: 'home', name: 'Home' },
		{ href: '/events', icon: 'event', name: 'Events' },
		{ href: '/map', icon: 'explore', name: 'Map' },
		{ href: '/more', icon: 'more_horiz', name: 'More' }
	];

	let itemRefs = new Array(navItems.length).fill(null);
	let indicatorStyle = '';

	function stripBase(path) {
		return base && path.startsWith(base) ? path.slice(base.length) || '/' : path;
	}

	async function updateIndicator() {
		await tick();
		const activeHref = stripBase($page.url.pathname);
		const index = navItems.findIndex((item) =>
			item.href === '/more'
				? activeHref === '/more' || activeHref.startsWith('/more/')
				: item.href === activeHref
		);
		if (itemRefs[index]) {
			const el = itemRefs[index];
			const rect = el.getBoundingClientRect();
			const parentRect = el.parentElement.getBoundingClientRect();
			const left = rect.left - parentRect.left;
			const width = rect.width;
			indicatorStyle = `transform: translateX(${left}px); width: ${width}px;`;
		}
	}

	function isActive(navItem) {
		const path = stripBase($page.url.pathname);
		if (navItem.href === '/more') {
			return path === '/more' || path.startsWith('/more/');
		}
		return path === navItem.href;
	}

	$: $page.url.pathname, updateIndicator();
</script>

<div class="fixed bottom-6 left-1/2 z-10 w-[85%] max-w-[20rem] -translate-x-1/2 transform">
	<div
		class="absolute inset-0 -z-10 rounded-full bg-white/80 shadow saturate-200 backdrop-blur-lg dark:bg-black/70">
	</div>

	<div class="relative flex items-center justify-center rounded-full py-2.5">
		<div
			class="absolute left-0 h-[70%] rounded-full bg-white shadow-md transition-all duration-300 dark:bg-white/5"
			style={indicatorStyle}>
		</div>

		{#each navItems as navItem, i}
			<a
				href="{base}{navItem.href}"
				bind:this={itemRefs[i]}
				class={`w-18 relative z-10 flex flex-col items-center justify-center rounded-full py-1
            ${isActive(navItem) ? 'text-vermilion' : 'text-gray-500 dark:text-white/50'}`}>
				<span class="material-icons-round">{navItem.icon}</span>
				<p class="text-xs">{navItem.name}</p>
			</a>
		{/each}
	</div>
</div>
