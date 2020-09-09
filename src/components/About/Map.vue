<template>
  <div id="map"></div>
</template>
<script>
export default {
  name: "Map",
  mounted: () => {
    var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

    mapboxgl.accessToken =
      "pk.eyJ1IjoidmFsZW50aW5lLTQ1NiIsImEiOiJja2RoNW82YnIyc3k3MnNrNmR2ZGxrd2NnIn0.HzMMj_gjqm349h5PE9RIjw";
    new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.531, 50.452],
      zoom: 11,
      scrollZoom: false
    });
  }
};
</script>
<style scoped>
#map {
  width: 100%;
  height: calc(100vh - 75px);
  margin-top: 20px;
}

@media screen and (max-width: 425px) {
  #map {
    margin-top: 0;
  }
}
</style>
