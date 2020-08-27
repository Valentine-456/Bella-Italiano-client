<template>
  <div id="MenuItem">
    <b-card
      :title="title"
      :img-src="img"
      bg-variant="dark"
      text-variant="white"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 menu-item"
    >
      <b-card-text>
        <slot></slot>
      </b-card-text>

      <b-button pill href="#" variant="warning" class>{{buttonText}}</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: "0 $"
    },
    img: {
      type: String,
      default:
        "https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg"
    }
  }
};
</script>


<style scoped>
.menu-item {
  width: 20rem;
  min-height: 40vh;
}

@media screen and(max-width: 900px) {
  .menu-item {
    width: 34%;
    min-height: 40vh;
  }
}
@media screen and (max-width: 425px) {
  .menu-item {
    width: 16rem;
  }
}
</style>