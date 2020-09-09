<template>
  <div>
    <b-button size="lg" variant="dark" v-b-toggle.sidebar-1>Quick menu</b-button>
    <b-sidebar
      id="sidebar-1"
      title="Quick menu"
      shadow
      bg-variant="dark"
      text-variant="light"
      backdrop-variant="dark"
      backdrop
    >
      <template v-slot:default="{ hide }">
        <div class="d-flex flex-column align-items-center">
          <b-row>
            <b-button
              class="menu-mini-section"
              variant="warning"
              @click="chooseMenu('wines', hide)"
              size="lg"
            >
              Wine card
              <img src="../../assets/wine-bottle.svg" />
            </b-button>
          </b-row>
          <b-row>
            <b-button
              class="menu-mini-section"
              variant="warning"
              @click=" chooseMenu('pasta', hide)"
              size="lg"
            >
              Pasta
              <img src="../../assets/pasta.svg" />
            </b-button>
          </b-row>
          <b-row>
            <b-button
              class="menu-mini-section"
              variant="warning"
              @click="chooseMenu('pizza', hide)"
              size="lg"
            >
              Pizza
              <img src="../../assets/pizza.svg" />
            </b-button>
          </b-row>
          <b-row>
            <b-button
              class="menu-mini-section"
              variant="warning"
              @click="chooseMenu('seafood', hide)"
              size="lg"
            >
              Seafood
              <img src="../../assets/seafood.svg" />
            </b-button>
          </b-row>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "MenuMini",
  methods: {
    ...mapActions("menu", ["getMenu"]),
    chooseMenu(foodType, hide) {
      this.getMenu(foodType);
      hide();
    }
  }
};
</script>
<style scoped>
.menu-mini-section img {
  width: 30px;
  height: 30px;
}

.menu-mini-section {
  margin-top: 20px;
  width: 100%;
}
</style>
