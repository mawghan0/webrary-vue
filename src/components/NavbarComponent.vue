<template>
  <nav class="navbar bg-dark custom-navbar">
    <div class="container-fluid container-custom">
      <router-link to="/home">
        <img src="../assets/webraryWhite.svg" alt="Bootstrap" width="198" height="132" />
      </router-link>

      <router-link to="/about/profile"><img src="../assets/User_alt.svg" alt=""></router-link>
    </div>
  </nav>
</template>

<style scoped>
.container-custom {
  width: 90%;
  margin: 0 auto;
  position: fixed;
  left: 50px;
}

.custom-navbar {
  height: 100px;
  
}

.navbar-brand img {
  margin-top: -10px;
}
</style>