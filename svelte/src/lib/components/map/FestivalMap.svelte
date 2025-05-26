<script>
	import markers from '$lib/data/markers.json';
	import artists from '$lib/data/artists.json';
	import { onMount } from 'svelte';
	import L from 'leaflet';
	import { t } from 'svelte-i18n';

	let map;
	const bounds = [
		[0, 0],
		[1596, 2242]
	];

	function getArtistsForStage(stageName) {
		return artists.filter((a) => a.stage === stageName);
	}

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

			let popupContent = `<strong>${$t(name)}</strong><br>${$t(description)}`;
			const stageArtists = getArtistsForStage(name)
				.filter((a) => a.start && a.day && a.day.toLowerCase() === 'sat')
				.sort((a, b) => a.start.localeCompare(b.start))
				.slice(0, 2);

			if (stageArtists.length > 0) {
				popupContent += '<br><br><u>' + $t('upcoming_artists') + ':</u>';
				stageArtists.forEach((a) => {
					popupContent += `
                        <div style="display:flex;align-items:center;margin-bottom:8px;margin-top:8px;">
                            <img src="${a.img}" alt="${$t(a.artist)}" style="width:38px;height:38px;border-radius:24px;object-fit:cover;margin-right:10px;">
                            <div>
                                <div style="font-weight:bold;">${$t(a.artist)} <span style="font-weight:normal;">- ${$t(a.song)}</span></div>
                                <div style="font-size:12px;color:#888;">${a.start ? a.start : ''}</div>
                            </div>
                        </div>
                    `;
				});
			}
			L.marker(coords, markerOptions).addTo(map).bindPopup(popupContent);
		});
	});
</script>

<div id="map" class="fixed inset-0 h-screen w-screen"></div>
