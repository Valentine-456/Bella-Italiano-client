<template>
  <div id="wrapper">
    <MenuMini id="menu-sidebar" />
    <b-container id="menu" class="ml-auto d-flex flex-column flex-start" fluid="lg">
      <MenuGroup></MenuGroup>
    </b-container>
    <ButtonUp />
  </div>
</template>

<script>
import MenuGroup from "../components/Menu/MenuGroup";
import MenuMini from "../components/Menu/MenuMini";
import ButtonUp from "../components/ButtonUp";
export default {
  name: "Menu",
  components: {
    MenuGroup,
    MenuMini,
    ButtonUp
  }
};
</script>

<style scoped>
#wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
}

#menu-sidebar {
  margin: 20px;
}

#menu {
  min-height: calc(100vh - 75px);
  padding-top: 20px;
}
h2 {
  text-transform: uppercase;
  font-size: 1.5rem;
}
</style>
