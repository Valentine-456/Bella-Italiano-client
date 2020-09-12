<template>
  <div id="advantages">
    <b-carousel
      id="carousel-1"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-width="1000"
      img-height="500"
      style="text-shadow: 1px 1px 2px #333;"
      no-hover-pause
    >
      <b-carousel-slide background="rgb(50,56,62)" img-blank>
        <div class="carousel-slide-dark">
          <div class="image image-1"></div>
          <h3>Смачні страви з кращих інгредієнтів</h3>
        </div>
      </b-carousel-slide>
      <b-carousel-slide background="rgb(255,193,7)" img-blank>
        <div class="carousel-slide-light">
          <div class="image image-2"></div>
          <h3>З нами працюють майстри своєї справи</h3>
        </div>
      </b-carousel-slide>
      <b-carousel-slide background="rgb(50,56,62)" img-blank>
        <div class="carousel-slide-dark">
          <div class="image image-3"></div>
          <h3>Бездоганний сервіс</h3>
        </div>
      </b-carousel-slide>
      <b-carousel-slide background="rgb(255,193,7)" img-blank>
        <div class="carousel-slide-light">
          <div class="image image-4"></div>
          <h3>Продумана система бонусів та знижок</h3>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: "Advantages"
};
</script>
<style scoped>
#advantages {
  margin-top: 50px;
}

.carousel-slide-dark {
  color: white;
}

.carousel-slide-light {
  color: black;
}

.image {
  background-size: cover;
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
}

.image-1 {
  background-image: url("../../assets/pizza.jpg");
}

.image-2 {
  background-image: url("../../assets/professionals.jpg");
}

.image-3 {
  background-image: url("../../assets/service.jpg");
}

.image-4 {
  background-image: url("../../assets/discount.jpg");
}

@media screen and (max-width: 700px) {
  .image {
    background-size: cover;
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
  }

  h3 {
    font-size: 1.25em;
    font-family: "Italiana", sans-serif;
  }
}
</style>