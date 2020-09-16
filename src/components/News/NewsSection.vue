<template>
  <div class="news-grid">
    <div
      v-for="(item, index) in news"
      :key="index + 1"
      class="news"
      @click="toggleDescription($event)"
    >
      <h3>{{item.title}}</h3>
      <div class="description hidden">
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsSection",
  computed: {
    ...mapGetters(["news"])
  },
  methods: {
    toggleDescription: function(event) {
      const description = event.currentTarget.querySelector(".description");
      description.classList.toggle("hidden");
    }
  }
};
</script>
<style scoped>
.news-grid {
  padding-top: 10px;
  height: 70vh;
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-column: 1fr 1fr 1fr 1fr;
  grid-row: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "a a a b"
    "d c c b"
    "d c c b"
    "e f f f";
}

.news {
  transition: 0.6s all ease;
  position: relative;
}
.news h3 {
  margin-top: 10%;
  font-size: 1.3rem;
}

.news:nth-of-type(2n) {
  background-color: rgb(255, 193, 7);
  color: black;
}

.news:nth-of-type(2n):hover {
  background-color: rgb(255, 220, 36);
}

.news:nth-of-type(2n + 1) {
  background-color: rgb(50, 56, 62);
  color: white;
}

.news:nth-of-type(2n + 1):hover {
  background-color: rgb(75, 81, 88);
}

.news:nth-of-type(1) {
  grid-area: a;
}

.news:nth-of-type(2) {
  grid-area: b;
}

.news:nth-of-type(3) {
  grid-area: c;
}

.news:nth-of-type(4) {
  grid-area: d;
}

.news:nth-of-type(5) {
  grid-area: e;
}

.news:nth-of-type(6) {
  grid-area: f;
}

.description {
  background-color: rgb(15, 18, 21);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  color: white;
  transition: 0.6s clip-path;
  clip-path: circle(70.7% at 50% 50%);
}

.hidden {
  clip-path: circle(0% at 50% 50%);
}

@media screen and (max-width: 750px) {
  .news h3 {
    margin-top: 20%;
    font-size: 1.3rem;
  }

  .news-grid {
    grid-row: auto auto auto auto auto auto;
    grid-template-areas:
      "a a a a"
      "b b b b"
      "c c c c"
      "d d d d"
      "e e e e"
      "f f f f";
    height: 180vh;
    grid-gap: 5px;
  }
  .description {
    font-size: 0.95rem;
    overflow: auto;
  }
}
</style>