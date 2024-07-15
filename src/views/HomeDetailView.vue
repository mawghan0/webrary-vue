<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/api';

const router = useRouter();
const route = useRoute();
const book = ref(null);

onMounted(async () => {
  const bookId = route.params.id;
  try {
    const response = await api.get(`/books/${bookId}`);
    book.value = response.data;
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
});

const showModal = ref(false);

const postBook = async () => {
  try {
    const bookId = route.params.id;
    const response = await api.post(`/borrowings/${bookId}`);
    // error.value = response;
    alert("Buku berhasil dipinjam");
    router.push('/about/history/all')
    console.log('Review submitted successfully:', response.data);
  } catch (error) {
    // error.value = response;
    console.error('Error submitting review:', error);
  }
};
</script>

<template>
  <div v-if="showModal" class="form-overlay">
    <div class="form-modal">
      <h1>Konfirmasi Peminjaman</h1>
      <div class="button-overlay">
        <input @click="showModal = false" type="button" value="Batal">
        <input @click="postBook" type="button" value="Konfirmasi">

      </div>
    </div>
  </div>
  <NavbarComponent />
  <main>
    <div v-if="book" class="container container-custom">
      <div class="img">
        <img :src="book.cover_image" alt="cover_buku">
      </div>
      <div class="text-button">
        <div class="sinopsis">
          <h1>{{ book.title }}</h1>
          <p>{{ book.description }}</p>
        </div>
        <div class="button">
          <input @click="showModal = true" type="button" value="Pinjam" class="pinjam">
          <router-link :to="{ name: 'review', params: { id: book.id } }"><input type="button" value="Review"
              class="review"></router-link>
          <router-link to="/about/history/all"><input type="button" value="Riwayat Pinjam"
              class="riwayat"></router-link>
        </div>
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
}

.container-custom {
  /* border: 1px black solid; */
  display: flex;
  min-height: 100vh;
  gap: 100px;
  align-items: center;

}

.img {
  height: 470px;
  width: 350px;
  margin-top: 60px
}

.img img {
  height: 470px;
  width: 350px;
  object-fit: cover;
  border: 5px solid black;
  box-shadow: 0 0 10px black;
}

.text-button {
  height: 470px;
  border: 5px solid black;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  padding: 20px;
  text-align: justify;
  background-color: white;
  margin-top: 60px
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  height: 100%;
  align-items: center;
  /* border: 1px solid black; */
}

.pinjam,
.review,
.riwayat {
  width: 800px;
  background-color: black;
  color: white;
  border-radius: 20px;
  height: 40px
}
</style>
