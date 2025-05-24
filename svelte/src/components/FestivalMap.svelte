<script>
	import markers from '../data/markers.json';
	import { onMount } from 'svelte';
	import L from 'leaflet';

	let map;
	const bounds = [
		[0, 0],
		[1596, 2242]
	];

	onMount(() => {
		map = L.map('map', {
			crs: L.CRS.Simple,
			minZoom: -0.7,
			zoomSnap: 0.1,
			zoomControl: false,
			maxBounds: bounds,
			maxBoundsViscosity: 1,
			attributionControl: false
		});

		L.imageOverlay('/img/map/map.svg', bounds).addTo(map);
		map.fitBounds(bounds);

		markers.forEach(({ name, description, smallIcon, icon, largeIcon, coords }) => {
			let markerOptions = {};
			if (smallIcon) {
				markerOptions.icon = L.icon({
					iconUrl: smallIcon,
					iconSize: [22, 22],
					popupAnchor: [0, -15]
				});
			} else if (icon) {
				markerOptions.icon = L.icon({
					iconUrl: icon,
					iconSize: [30, 30],
					popupAnchor: [0, -15]
				});
			} else if (largeIcon) {
				markerOptions.icon = L.icon({
					iconUrl: largeIcon,
					iconSize: [70, 50],
					popupAnchor: [0, -15]
				});
			}
			L.marker(coords, markerOptions)
				.addTo(map)
				.bindPopup(`<strong>${name}</strong><br>${description}`);
		});
	});
</script>

<div id="map" class="fixed inset-0 h-screen w-screen"></div>
