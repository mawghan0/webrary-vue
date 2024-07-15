<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/api';

const route = useRoute();
const book = ref(null);
const reviews = ref([]);
const text = ref('');
const rating = ref(0);
// const error = ref([]);

onMounted(async () => {
  const bookId = route.params.id;
  try {
    const response = await api.get(`/books/${bookId}`);
    book.value = response.data;

    const reviewResponse = await api.get(`/reviews`);
    reviews.value = reviewResponse.data.reviews;


  } catch (error) {
    console.error("Error fetching book details:", error);
  }
});

const postReview = async () => {
  try {
    const bookId = route.params.id;
    const response = await api.post(`/reviews/${bookId}`, {
      comment: text.value,
      rating: rating.value,
    });
    // error.value = response;
    alert("Review berhasil ditambahkan");
    console.log('Review submitted successfully:', response.data);
  } catch (error) {
    // error.value = response;
    console.error('Error submitting review:', error);
  }
};

</script>

<template>
  <NavbarComponent />
  <main>
    <div v-if="book" class="container container-custom">
      <div class="img">
        <img :src="book.cover_image" alt="">
        <div class="form">
          <label for="text">Tambah review buku :</label>
          <input v-model="text" type="text" name="text" id="text">
          <div class="div">
            <div class="rating">
              <label for="number">Rating</label>
              <input v-model="rating" type="number" name="number" id="number">
            </div>
            <button @click="postReview">Post</button>
          </div>

        </div>
      </div>
      <div class="text-button">
        <div v-for="review in reviews" :key="review.user_id" class="review">
          <h3>Rating {{ review.rating }}</h3>
          <h3>{{ review.user_name }}</h3>
          <h4>{{ review.comment }}</h4>
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
  height: 400px;
  width: 350px;
  position: fixed;
  top: 150px;
}

.img img {
  height: 400px;
  width: 300px;
  object-fit: cover;
  border: 5px solid black;
  box-shadow: 0 0 10px black;
}

.form {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.form input {
  height: 100px;
  margin-bottom: 10px;
  font-size: 12px;
  /* line-height: normal; */
}

.form button {
  width: 30%;
  align-self: flex-end;
  background-color: yellow;
  border: 3px solid black;
  border-radius: 20px;
}

.div {
  display: flex;
  justify-content: space-evenly;
  /* border: 1px solid black; */

}

.rating {
  display: flex;
  /* align-items: center; */
  /* border: 1px solid black; */
  width: 70%;
}

.div input {
  width: 40px;
  height: 40px;
  font-size: 16px;
  margin-left: 10px;
}

.div button {
  align-self: flex-start;
}

.text-button::-webkit-scrollbar {
  display: none;
}

.text-button {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
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
