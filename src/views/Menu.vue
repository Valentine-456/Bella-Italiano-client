<template>
  <div id="wrapper">
    <MenuMini id='menu-sidebar'/>
    <b-container id="menu" class="ml-auto d-flex flex-column flex-start" fluid="lg">
      <MenuGroup title="Pasta"></MenuGroup>
      <MenuGroup title="Pizza"></MenuGroup>
      <MenuGroup title="Soups"></MenuGroup>
    </b-container>
  </div>
</template>

<script>
import MenuGroup from "../components/Menu/MenuGroup";
import MenuMini from "../components/Menu/MenuMini";
export default {
  name: "Menu",
  components: {
    MenuGroup,
    MenuMini
  }
};
</script>

<style scoped>
#wrapper {
  display: flex;
    width: 100%;
    flex-direction: column;
  align-content: flex-start;
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

@media screen and (max-width: 992px) {
  /* #wrapper {
    
  } */
}
</style>
