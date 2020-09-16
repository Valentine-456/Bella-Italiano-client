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
        <div v-if="colorSticker || typeSticker" class="card-stickers">
          <div v-if="colorSticker" :class="[colorSticker, 'sticker']"></div>
          <div v-if="typeSticker" :class="[typeSticker, 'sticker']"></div>
        </div>
        <div class="img" :style="photoBackground"></div>
      </div>
      <h4 class="card-title">{{title}}</h4>
      <b-button class="price-button" pill href="#" variant="warning">
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
    },
    color: {
      type: String
    },
    type: {
      type: String
    }
  },
  computed: {
    photoBackground: function() {
      return `background-image: url('${this.img}');`;
    },
    priceInCurrency: function() {
      return new Intl.NumberFormat("ua", {
        style: "currency",
        currency: "UAH",
        minimumFractionDigits: 2
      }).format(+this.buttonText);
    },
    colorSticker: function() {
      if (this.color === "white") return `sticker-white`;
      if (this.color === "red") return `sticker-red`;
      if (this.color === "pink") return `sticker-pink`;
      return "";
    },
    typeSticker: function() {
      if (this.type === "sweet") return `sticker-sweet`;
      if (this.type === "dry") return `sticker-dry`;
      if (this.type === "sparkling") return `sticker-sparkling`;
      // "../../assets/seafood.svg"
      return "";
    }
  }
};
</script>

<style scoped>
.card-deck > div {
  margin: auto;
}

.menu-item {
  width: 20rem;
  min-height: 40vh;
  margin: auto;
}
.card-img-top {
  position: relative;
  background-color: white;
}
.img {
  width: 100%;
  height: 320px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.card-stickers {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  position: absolute;
  top: 10px;
  left: 10px;
}
.sticker {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-size: contain;
  margin-bottom: 10px;
}

.sticker-red {
  background-image: url("../../assets/grapeRed.svg");
}
.sticker-white {
  background-image: url("../../assets/grapeWhite.svg");
}
.sticker-pink {
  background-image: url("../../assets/grapePink.svg");
}
.sticker-sweet {
  background-image: url("../../assets/wineSweet.svg");
}
.sticker-dry {
  background-image: url("../../assets/wineDry.svg");
}
.sticker-sparkling {
  background-image: url("../../assets/wineSparkling.svg");
}

.card-body {
  padding: 0;
}

.price-button {
  margin-bottom: 30px;
}

@media screen and (max-width: 800px) {
  .menu-item {
    width: 16rem;
  }
}
</style>
