<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<template>
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
        <input type="button" value="Pinjam" class="pinjam">
        <router-link to="/review"><input type="button" value="Review" class="review" ></router-link>
          <router-link to="/about/history"><input type="button" value="Riwayat Pinjam" class="riwayat"></router-link>
      </div>
    </div>
  </div></main>
 
</template>

<style scoped>
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
