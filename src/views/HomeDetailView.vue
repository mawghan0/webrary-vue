<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import { ref } from 'vue';

const showModal = ref(false);

function pinjamBuku(){
alert("halo");
}
</script>

<template>
  <div v-if="showModal" class="form-overlay">
<div class="form-modal">
  <h1>Konfirmasi Peminjaman</h1>
  <div class="button-overlay">
    <input @click="showModal = false" type="button" value="Batal">
    <router-link to="/about/history/all" ><input @click="pinjamBuku" type="button" value="Konfirmasi"></router-link>
    
  </div>
</div>
  </div>
  <NavbarComponent />
  <main> <div class="container container-custom">
    <div class="img">
      <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
    </div>
    <div class="text-button">
      <div class="sinopsis">
        <h1>Judul Buku</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo unde ad laboriosam officiis vel
          recusandae, libero ipsum dolorum! Eveniet reiciendis quasi at rerum commodi aperiam adipisci, accusamus
          excepturi quam.
          Iste nemo molestias esse quaerat culpa earum dicta placeat reiciendis dolorum molestiae consectetur, adipisci
          hic magnam doloremque, labore voluptates unde optio corrupti id. Iure, odit nostrum a accusantium harum
          repellat?
          Harum voluptatibus ipsam atque soluta amet aut excepturi quae numquam temporibus eum earum repellat, esse est
          possimus fugit praesentium. Est laboriosam deleniti ipsa quia, tempore quis dolore nemo voluptatem
          accusantium!
          Velit incidunt dolores magni nemo unde officiis, molestias dolor. At veritatis laboriosam possimus mollitia
          perspiciatis. Natus non quaerat, eum aperiam, incidunt quam totam laudantium voluptatem cumque pariatur
          consectetur mollitia corrupti.</p>
      </div>
      <div class="button">
        <input @click="showModal = true" type="button" value="Pinjam" class="pinjam">
        <router-link to="/review"><input type="button" value="Review" class="review" ></router-link>
          <router-link to="/about/history/all"><input type="button" value="Riwayat Pinjam" class="riwayat"></router-link>
      </div>
    </div>
  </div></main>
 
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

.button-overlay input:first-child{
  width: 100px;
  height: 40px;
  color: white;
  background-color: red;
  border-radius: 20px;
}
.button-overlay input:last-child{
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
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
}

.pinjam, .review, .riwayat {
  width: 800px;
  background-color: black;
  color: white;
  border-radius: 20px;
  height: 40px
}
</style>
