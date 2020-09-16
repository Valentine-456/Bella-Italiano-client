<template>
  <b-container fluid="lg" class="ml-auto">
    <NewsSection />
  </b-container>
</template>
<script>
import NewsSection from "../components/News/NewsSection";
export default {
  name: "News",
  components: {
    NewsSection
  }
};
</script>
<style scoped>
</style>