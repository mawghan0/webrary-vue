<script setup>

</script>

<template>

  <main>
    <nav class="navbar bg-dark custom-navbar">
      <div class="container-fluid container-custom">
        <router-link to="/home">
          <img src="../assets/webraryWhite.svg" alt="Bootstrap" width="198" height="132" />
        </router-link>
        <form class="d-flex" role="search">
          <input class="form-control me-2 search-custom" type="search" placeholder="Search..." aria-label="Search">
        </form>
        <router-link to="/about/profile"><img src="../assets/User_alt.svg" alt=""></router-link>
      </div>
    </nav>
    <div class="container-fluid container-custom-main">
      a
    </div>
  </main>

</template>

<style scoped>
.container-custom {
  width: 90%;
  margin: 0 auto;
}

.custom-navbar {
  height: 140px;
}

.navbar-brand img {
  margin-top: -10px;
}

.search-custom {
  width: 710px;
  height: 60px;
  font-size: 36px;
  padding: 0 30px;
  border-radius: 15px;
}

main {
  background-color: #212529;
  min-height: 100vh;
}

.container-custom-main {
  background-image: linear-gradient(to bottom right, #E1C35D, #EEEBE1);
  width: 90%;
}
</style>