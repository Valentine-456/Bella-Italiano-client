<template>
  <div id="menu" class="container ml-auto d-flex flex-column flex-start">
    <MenuGroup title="Pasta"></MenuGroup>
    <MenuGroup title="Pizza"></MenuGroup>
    <MenuGroup title="Soups"></MenuGroup>
  </div>
</template>

<script>
import MenuGroup from "../components/MenuGroup";

export default {
  name: "Menu",
  components: {
    MenuGroup
  }
};
</script>

<style scoped>
#menu {
  min-height: calc(100vh - 75px);
  padding-top: 20px;
}
h2 {
  text-transform: uppercase;
  font-size: 1.5rem;
}
</style>
