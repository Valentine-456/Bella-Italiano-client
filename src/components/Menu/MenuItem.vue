<template>
  <div>
    <b-card
      bg-variant="dark"
      text-variant="white"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 menu-item"
    >
      <!-- <b-tooltip target="MenuItem" triggers="hover"> -->
      <!-- <slot></slot> -->
      <!-- </b-tooltip> -->
      <div class="card-img-top">
        <div class="img" :style="photoBackground"></div>
      </div>
      <h4 class="card-title">{{title}}</h4>
      <b-button class='price-button' pill href="#" variant="warning">
        {{
        priceInCurrency
        }}
      </b-button>
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
  },
  computed: {
    photoBackground: function() {
      return `background-image: url('${this.img}');`;
    },
    priceInCurrency: function() {
      return new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2
      }).format(+this.buttonText);
    }
  }
};
</script>

<style scoped>
.menu-item {
  width: 20rem;
  min-height: 40vh;
}
.card-img-top {
  /* width: 100%;
  margin: 0;
  height: 320px; */
  background-color: white;
}
.img {
  width: 100%;
  height: 320px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.card-body {
  padding: 0;
}

.price-button {
  margin-bottom: 30px;
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
