<template>
  <div id="container">
    <google-map></google-map>
  </div>
</template>

<script>
import GoogleMap from "@/views/map/GoogleMap";
export default {
  components: {
    GoogleMap
  }
};
</script>

<style scoped>
.container {
  position: relative;
}
</style>