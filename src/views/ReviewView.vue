<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<template>
  <NavbarComponent />
  <main>
    <div class="container container-custom">
      <div class="img">
        <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
      </div>
      <div class="text-button">
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
        <div class="review">
          <h3>Rating 5</h3>
          <h3>Nama Pengguna</h3>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, asperiores voluptatibus! Deleniti
            temporibus dolor officia repellendus, soluta quae omnis ipsam quas fugit illo mollitia laborum cum
            voluptate? Exercitationem, error assumenda!</h4>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>
/* body {
  background-color: #EEEBE1; 
} */
main {
  background-color: #EEEBE1;
  min-height: 87vh;
}

.container-custom {
  /* border: 1px black solid; */
  display: flex;
  background-color: #EEEBE1;
  min-height: 87vh;
  gap: 100px;
  /* align-items: center; */


}

.img {
  height: 470px;
  width: 350px;
  position: fixed;
  top: 150px;
}

.img img {
  height: 470px;
  width: 350px;
  object-fit: cover;
  border: 5px solid black;
  box-shadow: 0 0 10px black;
}

.text-button::-webkit-scrollbar {
    display: none;
}

.text-button {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  height: 83vh;
  /* border: 5px solid black; */
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  padding: 20px;
  text-align: justify;
  /* background-color: white; */
  width: 70%;
  margin: 130px 0 0 400px;
  overflow: auto;
  row-gap: 20px;
}

.review {
  border: 3px solid black;
  /* height: 200px; */
  border-radius: 20px;
  padding: 10px 20px;
}

.review h3 {
  font-weight: 500;
}

.review h4 {
  font-weight: 400;
  font-size: 16px;
}
</style>
