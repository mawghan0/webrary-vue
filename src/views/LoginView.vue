<script setup>
import HeadComponent from '@/components/HeadComponent.vue';
import { RouterLink, useRouter } from 'vue-router';

import { ref } from 'vue';
import axios from 'axios';

const router = useRouter();

const email = ref('');
const password = ref('');
// const posts = ref([]);

async function getUser() {
  try {
    const response = await axios({
      method: "post",
      url: "http://webrary-app.test/api/login",
      data: {
        email: email.value, // Gunakan nilai dari v-model
        password: password.value // Gunakan nilai dari v-model
      }
    });
    // posts.value = response.data;
    const token = response.data.token;
    localStorage.setItem('authToken', token); // Simpan token di localStorage
    console.log(response);
    router.push('/home'); // Redirect ke /home setelah login berhasil
  } catch (error) {
    console.error(error);
  }
}
// getUser();
</script>

<template>
  <header>
    <HeadComponent />
  </header>
  <main>
    <div class="container d-flex flex-column text-dark custom-container">
      <div class="p-2 custom-img-login">
        <img src="../assets/webraryBrown.svg" alt="Bootstrap" width="198" height="132" />
      </div>
      <div class="p-2 flex-grow-1 custom-input-login">
        <!-- <form> -->
        <div class="mb-4 mt-4">
          <label for="exampleInputEmail1" class="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="35"
              height="35" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg></label>
          <input v-model="email" type="email" class="form-control custom-form d-inline-block" id="exampleInputEmail1"
            aria-describedby="emailHelp" />
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="35"
              height="35" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
              <path
                d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg></label>
          <input v-model="password" type="password" class="form-control custom-form d-inline-block"
            id="exampleInputPassword1" />
        </div>
        <div>
          <router-link to="/register"><button type="submit" class="btn text-white custom-button-daftar">
              Daftar
            </button></router-link>
          <button @click="getUser" type="submit" class="btn text-white custom-button-daftar custom-button-login">
            Login
          </button>
        </div>
        <!-- </form> -->
      </div>
    </div>
  </main>


</template>

<style scoped>
.custom-container {
  max-width: 600px;
  height: 500px;
  background-color: #d9d9d9;
  border-radius: 73px;
  padding: 50px;
  margin: 70px auto;
}

.custom-img-login {
  margin: -40px auto 0;
}

.custom-input-login {
  text-align: center;
}

.custom-form {
  width: 400px;
  height: 40px;
  border-radius: 18px;
  background-color: #554A4A;
  border: 0 solid black;
  margin-left: 10px;
  color: white;
  margin-top: 0px;
  margin-bottom: 10px;
}

.custom-button-daftar {
  background-color: #7E7C7C;
  width: 195px;
  height: 50px;
  border-radius: 20px;
  margin-top: 20px;
}

.custom-button-login {
  background-color: #6b6868;
  margin-left: 25px;
}

.custom-button-daftar:hover {
  background-color: #554A4A;
}
</style>
