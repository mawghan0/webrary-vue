<script setup>

</script>

<template>

  <main>
    <nav class="navbar bg-dark custom-navbar">
      <div class="container-fluid container-custom">
        <router-link to="/home">
          <img src="../assets/webraryWhite.svg" alt="Bootstrap" width="198" height="132" />
        </router-link>
        <form class="d-flex" role="search">
          <input class="form-control me-2 search-custom" type="search" placeholder="Search..." aria-label="Search">
        </form>
        <router-link to="/about/profile"><img src="../assets/User_alt.svg" alt=""></router-link>
      </div>
    </nav>
    <!-- nav -->
    <div class="container-fluid container-custom-main d-flex">
      <div class="container-fluid container-hero">
        <div class="hero-img"><img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW"></div>
        <div class="hero-text">
          <div id="judul">
            <h1>Judul buku</h1>
            <h3>Genre buku</h3>
          </div>
          <div id="paragraf">
            <h3>sinopsis</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quisquam dolor alias praesentium
              dignissimos eaque, earum ab aliquam, libero vitae nam. Minus voluptas cumque, distinctio eius maiores
              temporibus a deserunt!
              Assumenda obcaecati facilis temporibus commodi. Mollitia tempore, ab aliquid amet dolorem doloremque. Iste
              saepe, illo aut quam assumenda eveniet ratione sapiente soluta officiis, minima ex officia dicta eum neque
              cupiditate?
              Eveniet repellendus itaque consequuntur, atque vero possimus laborum? Eos natus vitae aliquid amet, nobis
              debitis enim voluptate, accusantium consectetur non, molestias id! Similique nihil quam quo iste sunt
              blanditiis non.
              Pariatur, labore. Nulla consectetur inventore ipsum deserunt nam saepe autem blanditiis maxime eveniet
              provident, quibusdam doloremque iusto, vitae officiis eum id, consequatur odio quisquam maiores. Dolorum
              atque magnam culpa nam.
              Ea maxime, quis, voluptatem eum architecto quasi ullam consectetur iste perferendis aperiam, quia deserunt
              rerum distinctio debitis adipisci? Error, accusantium. Explicabo, possimus dolores blanditiis dignissimos
              consectetur nihil id obcaecati sed.</p>
          </div>
        </div>
      </div>

    </div>
    <!-- hero -->
     
  </main>

</template>

<style scoped>
.container-custom {
  width: 90%;
  margin: 0 auto;
}

.custom-navbar {
  height: 140px;
}

.navbar-brand img {
  margin-top: -10px;
}

.search-custom {
  width: 710px;
  height: 60px;
  font-size: 36px;
  padding: 0 30px;
  border-radius: 15px;
}
/* nav */

main {
  background-color: #212529;
  min-height: 100vh;
}

.container-custom-main {
  background-color: #EEEBE1;
  width: 90%;
  padding: 0;
  min-height: 100vh;
}

.container-hero {
  background-image: linear-gradient(to bottom right, #E1C35D, #EEEBE1);
  padding: 0;
  height: 410px;
  gap: 130px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0px;
}

.hero-img {
  width: 280px;
  height: 370px;
  overflow: hidden;
  border: 10px black solid;
}

.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.hero-text {
  width: 60%;
  display: flex;
  height: 370px;
  flex-direction: column;

  #judul h3 {
    font-weight: 400;
  }

  #paragraf h3 {
    font-weight: 400;
  }

  #paragraf p {
text-align: justify;
  }
}
/* hero css */

</style>