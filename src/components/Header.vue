<template>
  <div class="row">
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand"
          ><span>
            <font-awesome-icon
              class="icons"
              :icon="['fas', 'wave-square']" /></span
          >EPSRC Data</a
        >

        <a class="d-flex" type="search" placeholder="Search" aria-label="Search"
          >FAQ</a
        >
      </div>
    </nav>
    <div class="banner">
      <h1 class="d-flex justify-content-center text-center">
        Welcome to the ESPRC Data Display
      </h1>
    </div>
    <!-- <img src="../assets/background.svg" alt="My Happy SVG" /> -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin-bottom: 3%;
}
.icons {
  margin-right: 5%;
}
.banner {
  background-image: url("../assets/background.svg") !important;
  height: 500px;
}
h1 {
  margin-top: 200px;
}
</style>
