<template>
  <div id="menuGroup">
    <h2 :id="title">{{title}}</h2>
    <b-card-group deck>
      <MenuItem title="asdf" buttonText="45 $">jmhgfsda</MenuItem>
      <MenuItem
        title="dfghj"
        buttonText="54 $"
      >LKJHGDFSHJKUGFDSFGHJHJAGVJJFAS;;;;;;;RHF8IOH YHIUO TYUHUYF CTGHJKEGBSFDADCZVF</MenuItem>
      <MenuItem title="asdfdgh" buttonText="13 $"></MenuItem>
      <MenuItem buttonText="More..."></MenuItem>
    </b-card-group>
  </div>
</template>
<script>
import MenuItem from "./MenuItem";

export default {
  name: "MenuGroup",
  components: {
    MenuItem
  },
  props: {
    title: String
  }
};
</script>
<style scoped>
#menuGroup {
  background-color: whitesmoke;
  padding-top: 20px;
  padding-left: 0;
}
</style>
