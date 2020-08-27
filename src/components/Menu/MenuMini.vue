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
        <div class="d-flex  flex-column align-items-center">
          <b-row>
            <b-button class='menu-mini-section' variant="warning" @click="hide" size="lg">
              Wine card
              <img src="../../assets/wine-bottle.svg" />
            </b-button>
          </b-row>
          <b-row>
            <b-button class='menu-mini-section' variant="warning" @click="hide" size="lg">
              Italian cuisine
              <img src="../../assets/pasta.svg" />
            </b-button>
          </b-row>
          <b-row>
            <b-button class='menu-mini-section' variant="warning" @click="hide" size="lg">
              Children menu
              <img src="../../assets/doll.svg" />
            </b-button>
          </b-row>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: "MenuMini"
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