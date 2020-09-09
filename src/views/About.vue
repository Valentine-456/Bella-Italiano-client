<template>
  <b-container id='about' fluid="lg" >
    <Map />
  </b-container>
</template>
<script>
import Map from "../components/About/Map";
export default {
  name: "About",
  components: {
    Map
  }
};
</script>
<style scoped>
#about {
  padding: 0;
}
</style>