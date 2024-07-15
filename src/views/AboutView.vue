<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import { ref, onMounted } from 'vue';
import { useRouter, RouterView, useRoute, RouterLink } from 'vue-router';
import api from '@/api';

const route = useRoute();
const router = useRouter();
const user = ref();
const showModal = ref(false);
// console.log(router.getRoutes);

function showProfile() {
  router.push({ name: "profile" });
}
function showHistory() {
  router.push({ name: "history" });
  router.push({ name: "all" });
}

onMounted(async () => {

  try {
    const response = await api.get(`/users`);
    user.value = response.data;

  } catch (error) {
    user.value = error;
    console.error("Error fetching book details:", error);
  }
});

const logout = async () => {
  try {
    const response = await api.post(`/logout`);
    // error.value = response;
    alert("Berhasil logout");
    // hideModal(borrow);
    router.push('/login')
    console.log('Review submitted successfully:', response.data);
  } catch (error) {
    // error.value = response;
    console.error('Error submitting review:', error);
  }
};
</script>

<template>
  <NavbarComponent />
  <div v-if="showModal" class="form-overlay">
    <div class="form-modal">
      <h1>Apakah anda akan keluar?</h1>
      <div class="button-overlay">
        <input @click="showModal = false" type="button" value="Batal">
        <input @click="logout" type="button" value="Konfirmasi">

      </div>
    </div>
  </div>
  <main>
    <div class="container container-custom">
      <p v-if="!user">Loading user data...</p>
      <!-- <div v-else></div> -->
      <div v-else class="about">
        <h1>Halo {{ user.user }}</h1>
        <input @click="showProfile" type="button" value="Akun Saya"
          :class="{ active: route.fullPath == '/about/profile' }">
        <input @click="showHistory" type="button" value="Riwayat Pinjam"
          :class="{ active: route.fullPath == '/about/history/borrow' || route.fullPath == '/about/history/all' || route.fullPath == '/about/history/return' }">
        <input @click="showModal = true" type="button" value="Keluar">
      </div>
      <div class="dinamis">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
.form-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.786);
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-modal {
  height: 200px;
  background-color: rgba(255, 243, 243, 0.641);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
}

.button-overlay {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.button-overlay input:first-child {
  width: 100px;
  height: 40px;
  color: white;
  background-color: red;
  border-radius: 20px;
}

.button-overlay input:last-child {
  width: 150px;
  height: 40px;
  color: white;
  border-radius: 20px;
  background-color: green;
}

/* overlay modal */

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
  overflow: hidden;

}

.about .active {
  background-color: #8e8e8e;
  /* color: white; */
  border: 3px solid black;
}
</style>
