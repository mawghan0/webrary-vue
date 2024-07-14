<script setup>
import { useRouter, RouterView, useRoute, RouterLink } from 'vue-router';

const route = useRoute();
const router = useRouter();
// console.log(router.getRoutes);

function showAll() {
  router.push({ name: "all" });
}
function showBorrow() {
  router.push({ name: "borrow" });
}
function showReturn() {
  router.push({ name: "return" });
}
</script>

<template>
  <div class="container-fluid container-custom">
    <div class="button">
      <input @click="showAll" type="button" value="Semua" :class="{ active: route.fullPath == '/about/history/all'}">
      <input @click="showBorrow" type="button" value="Dipinjam" :class="{ active: route.fullPath == '/about/history/borrow'}">
      <input @click="showReturn" type="button" value="Selesai" :class="{ active: route.fullPath == '/about/history/return'}">
    </div>
    <div class="dinamis">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container-custom{
  display: flex;
  flex-direction: column;
  padding: 0;
}

.button input {
  color: white;
  background-color: black;
  height: 60px;
  width: 33.334%;
  border: 0;
  /* border-start-end-radius: 20px; */
}

.button input:first-child {
  border-top-left-radius: 19px;
  border-bottom-left-radius: 15px;
}

.button input:last-child {
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
}

.button .active {
  background-color: #8e8e8e;
  color: black;
  border: 3px solid black;
}

.dinamis {
  height: 66vh;
  overflow: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.dinamis::-webkit-scrollbar {
    display: none;
}
</style>