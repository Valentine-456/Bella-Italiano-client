<template>
  <b-button variant="warning" pill class="buttonUp" hidden @click="scrollUp"></b-button>
</template>
<script>
export default {
  name: "ButtonUp",
  methods: {
    scrollUp: function() {
      window.scrollTo(pageXOffset, 0);
    }
  },
  mounted: function() {
    const button = document.querySelector(".buttonUp");
    window.addEventListener("scroll", function() {
      button.hidden = pageYOffset < document.documentElement.clientHeight / 1.5;
    });
  }
};
</script>
<style scoped>
.buttonUp {
  position: fixed;
  top: 80%;
  right: 5%;
  width: 60px;
  height: 60px;
  background-image: url("/gallery/buttonUp.svg");
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>