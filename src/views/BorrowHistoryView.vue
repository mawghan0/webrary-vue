<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import { ref } from 'vue';

const showModal = ref(false);

function pinjamBuku(){
showModal.value = false;
}
</script>

<template>
    <div v-if="showModal" class="form-overlay">
    <div class="form-modal">
      <h1>Konfirmasi Perpanjangan</h1>
      <div class="button-overlay">
        <input @click="showModal = false" type="button" value="Batal">
        <input @click="pinjamBuku" type="button" value="Konfirmasi">

      </div>
    </div>
  </div>
  <div class="container-custom">
    <div class="container-fluid list-history">
      <div class="img">
        <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
      </div>
      <div class="text">
        <div class="judul">
          <h1>Judul buku</h1>
          <h4>Pengarang buku</h4>
        </div>
        <h3>Wajib dikembalikan 12-2-2024</h3>
      </div>
      <div class="pinjam">
        <h4>Sedang Dipinjam</h4>
        <input @click="showModal = true" type="button" value="Perpanjang">
      </div>
    </div>
    <div class="container-fluid list-history">
      <div class="img">
        <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
      </div>
      <div class="text">
        <div class="judul">
          <h1>Judul buku</h1>
          <h4>Pengarang buku</h4>
        </div>
        <h3>Wajib dikembalikan 12-2-2024</h3>
      </div>
      <div class="pinjam">
        <h4>Sedang Dipinjam</h4>
        <input type="button" value="Perpanjang">
      </div>
    </div>
    <div class="container-fluid list-history">
      <div class="img">
        <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
      </div>
      <div class="text">
        <div class="judul">
          <h1>Judul buku</h1>
          <h4>Pengarang buku</h4>
        </div>
        <h3>Wajib dikembalikan 12-2-2024</h3>
      </div>
      <div class="pinjam">
        <h4>Sedang Dipinjam</h4>
        <input type="button" value="Perpanjang">
      </div>
    </div>
    <div class="container-fluid list-history">
      <div class="img">
        <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
      </div>
      <div class="text">
        <div class="judul">
          <h1>Judul buku</h1>
          <h4>Pengarang buku</h4>
        </div>
        <h3>Buku wajib dikembalikan 12-2-2024</h3>
      </div>
      <div class="pinjam">
        <h4>Sedang Dipinjam</h4>
        <input type="button" value="Perpanjang">
      </div>
    </div>
    <div class="container-fluid list-history">
      <div class="img">
        <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
      </div>
      <div class="text">
        <div class="judul">
          <h1>Judul buku</h1>
          <h4>Pengarang buku</h4>
        </div>
        <h3>Buku wajib dikembalikan 12-2-2024</h3>
      </div>
      <div class="pinjam">
        <h4>Sedang Dipinjam</h4>
        <input type="button" value="Perpanjang">
      </div>
    </div>
    <div class="container-fluid list-history">
      <div class="img">
        <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
      </div>
      <div class="text">
        <div class="judul">
          <h1>Judul buku</h1>
          <h4>Pengarang buku</h4>
        </div>
        <h3>Buku wajib dikembalikan 12-2-2024</h3>
      </div>
      <div class="pinjam">
        <h4>Sedang Dipinjam</h4>
        <input type="button" value="Perpanjang">
      </div>
    </div>
  </div>
  
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
  font-size: 1em;
  color: red;
}

.pinjam {
  display: flex;
  flex-direction: column;
  align-items: end;
  /* border: 1px solid black; */
  width: 45%;
  justify-content: space-between;
}

.pinjam input {
  width: 170px;
  height: 50px;
  color: white;
  background-color: black;
  border-radius: 20px;
}
</style>