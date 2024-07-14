<template>

  <div class="container-fluid profile">
    <div class="headprofile">
      <h1>Profile Saya</h1>
      <p>Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
    </div>
    <div class="button">
      <h2>Update username disini</h2>
      <form action="">
        <Label for="user">Username :</Label>
        <input type="text" value="contoh123" name="user" id="user">
        <input type="button" value="Update username!" id="update">
      </form>
    </div>
  </div>

</template>

<style scoped>
.profile {
  background-color: white;
  padding: 20px;
}

.button {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}

.button h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.button label {
  font-size: 1.5em;
  margin-right: 10px
}

#user {
  height: 50px;
  border-radius: 15px;
  padding: 10px 10px;
  font-size: 1em;
}

#update {
  display: block;
  margin-left: 50px;
  margin-top: 30px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: #F8BC61;
  margin-bottom: 20px;
}
</style>