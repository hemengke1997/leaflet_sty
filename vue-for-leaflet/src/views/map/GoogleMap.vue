<template>
  <div id="map"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    initMap() {
      let map = L.map("map").setView([51.505, -0.09], 5);
      L.tileLayer
        .chinaProvider("Google.Normal.Map", { maxZoom: 12, minZoom: 3 })
        .addTo(map);

      var a = L.marker([39.61, -105.02]).bindPopup("This is a, CO."),
        b = L.marker([39.74, -104.99]).bindPopup("This is b, CO."),
        c = L.marker([39.73, -104.8]).bindPopup("This is c, CO."),
        d = L.marker([39.77, -105.23]).bindPopup("This is d, CO.");
      const cities = L.layerGroup([a, b, c, d]);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  }
};
</script>

<style lang="less" scoped>
#map {
  position: relative;
  min-height: 100vh;
}
</style>