
<script>
import { onMount } from 'svelte';
import { chapters } from './routes.js';
import mapboxgl from 'mapbox-gl';

let map;

onMount(() => {

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;
  
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/tomvaillant/cm0v2fyel00tf01pi3qqr263y',
        center: [9.17372, 47.19078], 
        zoom: 9.54,
        bearing: 18.30,
        pitch: 53.55
    });

    // map.on('load', () => {
    //     if (map.getLayer('future')) {
    //         map.setLayoutProperty('future', 'visibility', 'none');
    //     }
    // });

    window.onscroll = function () {
        var chapterNames = Object.keys(chapters);
        for (var i = 0; i < chapterNames.length; i++) {
            var chapterName = chapterNames[i];
            if (isElementOnScreen(chapterName)) {
                setActiveChapter(chapterName);
                break;
            }
        }
    };

    var activeChapterName = 'position-1';
    function setActiveChapter(chapterName) {
        if (chapterName === activeChapterName) return;

        map.flyTo({
            ...chapters[chapterName],
            freezeElevation: true
        });

        document.getElementById(chapterName).classList.add('active');
        document.getElementById(activeChapterName).classList.remove('active');

        activeChapterName = chapterName;

        // switch (activeChapterName) {
        //     case 'position-2':
        //         setTimeout(() => toggleLayerVisibility('future'), 500);
        //     break;
        //     case 'position-4':
        //         setTimeout(() => toggleLayerVisibility('future'), 1000);
        //     break;
        // }
    }

    // function toggleLayerVisibility(layerId) {
    //     const layerVisibility = map.getLayoutProperty(layerId, 'visibility');
    //     if (layerVisibility === 'visible') {
    //         map.setLayoutProperty(layerId, 'visibility', 'none');
    //     } else {
    //         map.setLayoutProperty(layerId, 'visibility', 'visible');
    //     }
    // }

    function isElementOnScreen(id) {
        var element = document.getElementById(id);
        var bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
    }

});
</script>



<style>
#map {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
  
<div id="map"></div>