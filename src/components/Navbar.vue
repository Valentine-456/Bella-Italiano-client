<template>
  <div id="navbar">
    <b-navbar variant="warning">
      <b-navbar-brand tag="h1" class="mb-0">Bello Italiano</b-navbar-brand>
      <b-nav tag="nav" pills justify>
        <b-nav-item to="/menu">Menu</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/news">News</b-nav-item>
        <b-nav-item to="/delivery">Delivery</b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({})
};
</script>
<style scoped>
*::selection {
  background-color: rgba(24, 24, 24, 0.7);
  color: darkgrey;
}

* {
  font-family: "Italiana", sans-serif;
  font-size: 1.75rem;
  font-weight: bold;
}

h1 {
  font-size: 2rem;
}

a {
  color: black;
  transition: all, 0.3s;
}

a:hover {
  color: white;
}

.router-link-active {
  background-color: rgba(58, 58, 58, 0.7) !important;
  color: white;
}

@media screen and (max-width: 540px) {
  * {
    font-family: "Italiana", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 1.75rem;
  }
}
</style>
