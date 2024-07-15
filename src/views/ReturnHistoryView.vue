<script setup>
import { ref, onMounted } from 'vue';
import api from '@/api';

const borrows = ref([]);

onMounted(async () => {
  try {
    const response = await api.get(`/borrowings/return`);
    borrows.value = response.data;

  } catch (error) {
    user.value = error;
    console.error("Error fetching book details:", error);
  }
});

</script>

<template>
  <div class="container-fluid container-custom">
    <div v-for="borrow in borrows" :key="borrow.id" class="container-fluid list-history">
      <div class="img">
        <img :src="borrow.cover_image" alt="">
      </div>
      <div class="text">
        <div class="judul">
          <h1>{{ borrow.title }}</h1>
          <h4>{{ borrow.genre }}</h4>
        </div>
        <h3>Buku telah dikembalikan</h3>
      </div>
      <div class="pinjam">
        <h4>Selesai</h4>
        <!-- <input type="button" value="Perpanjang"> -->
      </div>
    </div>

  </div>
</template>

<style scoped>
container-custom {
  display: flex;
  flex-direction: column;
  /* margin-top: 20px; */

}

.list-history {
  display: flex;
  flex-direction: row;
  border: 3px solid black;
  border-radius: 20px;
  padding: 20px 30px;
  background-color: #D9D9D9;
  /* justify-content: space-evenly; */
  gap: 30px;
  margin-top: 20px;
}

.img {
  border: 2px solid black;
  box-shadow: 0 0 10px black;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.judul h4,
.pinjam h4 {
  font-weight: 300;
}

.text h3 {
  font-size: 1.3em;
  color: green;
}

.pinjam {
  display: flex;
  flex-direction: column;
  align-items: end;
  /* border: 1px solid black; */
  width: 45%;
  justify-content: space-between;
}

/* .pinjam input {
  width: 170px;
  height: 50px;
  color: white;
  background-color: black;
  border-radius: 20px;
} */
</style>