<template>
  <div class="menuGroup">
    <h2>{{menuSection}}</h2>
    <b-card-group deck>
      <MenuItem
        v-for="(dish, index) in menu"
        :key="index + 1"
        :title="dish.name"
        :buttonText="dish.price + ' '"
        :img="dish.photo"
      ></MenuItem>
    </b-card-group>
  </div>
</template>
<script>
import MenuItem from "./MenuItem";
import { mapGetters } from "vuex";

export default {
  name: "MenuGroup",
  computed: {
    ...mapGetters("menu", ["menu", "menuSection"])
  },
  components: {
    MenuItem
  }
};
</script>
<style scoped>
.menuGroup {
  background-color: whitesmoke;
  padding-top: 20px;
  padding-left: 0;
}
</style>
