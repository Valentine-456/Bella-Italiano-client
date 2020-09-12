<template>
  <div id="map"></div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Map",
  computed: {
    ...mapGetters("map", ["geolocations", "addresses"])
  },
  methods: {
    initMap: function() {
      var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

      mapboxgl.accessToken =
        "pk.eyJ1IjoidmFsZW50aW5lLTQ1NiIsImEiOiJja2RoNW82YnIyc3k3MnNrNmR2ZGxrd2NnIn0.HzMMj_gjqm349h5PE9RIjw";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [30.531, 50.452],
        scrollZoom: false
      });

      const bounds = new mapboxgl.LngLatBounds();

      this.geolocations.forEach((loc, index) => {
        // Creates a marker
        const el = document.createElement("div");
        el.className = "marker";
        el.style.width = "50px";
        el.style.height = "50px";
        // el.style.backgroundImage =
        //   "url('https://cdn2.iconfinder.com/data/icons/restaurant-elements-v-02-1/64/fast_food_restaurant_element_shop_store_location_pin_map_pizza-512.png')";
        el.style.backgroundImage =
          "url('https://www.flaticon.com/svg/static/icons/svg/1627/1627867.svg')";
        el.style.backgroundSize = "cover";

        // Adds a marker
        new mapboxgl.Marker({
          element: el,
          anchor: "bottom"
        })
          .setLngLat(loc)
          .addTo(map);

        // Adds popup
        new mapboxgl.Popup({
          offset: 30
        })
          .setLngLat(loc)
          .setHTML(`<p>${this.addresses[index]}</p>`)
          .addTo(map);

        // Extends bounds of the map
        bounds.extend(loc);
      });

      try {
        map.fitBounds(bounds, {
          padding: {
            top: 120,
            bottom: 80,
            left: 80,
            right: 80
          }
        });
      } catch (error) {
        setTimeout(() => this.initMap());
      }
    }
  },
  created: function() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initMap();
    });
  },
  mounted: function() {
    this.initMap();
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
