<template>
  <b-container id="about" fluid="lg">
    <Map />
    <Advantages />
  </b-container>
</template>
<script>
import Map from "../components/About/Map";
import Advantages from "../components/About/Advantages";
export default {
  name: "About",
  components: {
    Map,
    Advantages
  }
};
</script>
<style scoped>
#about {
  padding: 0;
}
</style>