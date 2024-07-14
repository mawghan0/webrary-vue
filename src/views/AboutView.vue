<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import { useRouter, RouterView, useRoute, RouterLink } from 'vue-router';

const route = useRoute();
const router = useRouter();
// console.log(router.getRoutes);

function showProfile() {
  router.push({name: "profile"});
}
function showHistory() {
  router.push({name: "history"});
  router.push({name: "all"});
}


</script>

<template>
  <NavbarComponent />
  <main>
    <div class="container container-custom">
      <div class="about">
        <h1>Nama Pengguna</h1>
        <input @click="showProfile" type="button" value="Akun Saya" :class="{ active: route.fullPath == '/about/profile'}">
        <input @click="showHistory" type="button" value="Riwayat Pinjam" :class="{ active: route.fullPath ==  '/about/history/borrow' || route.fullPath == '/about/history/all' || route.fullPath == '/about/history/return'}">
        <router-link to="/login"><input type="button" value="Keluar"></router-link>
      </div>
      <div class="dinamis">
        <RouterView/>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #EEEBE1;
  min-height: 100vh;
}
.container-custom {
  display: flex;
  /* border: 1px black solid; */
  justify-content: space-between;
}
.about {
  margin-top: 200px;
  border: 3px black solid;
  display: flex;
  flex-direction: column;
  height: 330px;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 10px 10px 20px black;
  position: fixed;
}
.about h1 {
  font-size: 2em;
}

.about input {
  background-color: #E9E9E9;
  width: 270px;
  height: 50px;
  border-radius: 20px;
  border: 0;
}

.dinamis {
  width: 950px;
  /* border: 3px solid black; */
  border-radius: 20px;
  /* box-shadow: 10px 10px 20px black; */
  margin-top: 200px;
  /* height: 100vh; */
  margin-left: 400px;
  overflow:hidden;

}

.about .active {
  background-color: #8e8e8e;
  /* color: white; */
  border: 3px solid black;
}
</style>
