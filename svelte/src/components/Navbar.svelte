<script>
	import { page } from '$app/stores';

	const navItems = [
		{ href: '/', icon: 'explore' },
		{ href: '/schedule', icon: 'event' },
		{ href: '/profile', icon: 'person' },
		{ href: '/more', icon: 'more_horiz' }
	];

	let clickedItem = null;

	function handleClick(navItem) {
		clickedItem = navItem.href;
		setTimeout(() => {
			clickedItem = null;
		}, 300);
	}
</script>

<div
	class="fixed bottom-6 left-1/2 z-10 mx-auto flex w-[80%] max-w-md -translate-x-1/2 transform items-center justify-center gap-12 rounded-full bg-white pb-3 pt-4 shadow"
>
	{#each navItems as navItem}
		<a
			href={navItem.href}
			on:click={() => handleClick(navItem)}
			class={`${$page.url.pathname === navItem.href ? 'text-vermilion' : ''} transition-transform duration-200 
			${clickedItem === navItem.href ? 'scale-[108%]' : ''}`}
			><i class="material-icons-round">{navItem.icon}</i></a
		>
	{/each}
</div>
