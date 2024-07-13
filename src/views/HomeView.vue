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
      <!-- hero -->
      <div class="container-fluid container-popular">
        <h1>Popular</h1>
        <div class="container-fluid container-popular-main">
          <div class="book-popular">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-popular">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-popular">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-popular">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-popular">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-popular">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-popular">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-popular">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-popular">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-popular">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-popular">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-popular">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
        </div>
      </div>
      <!-- popular -->
      <div class="container-fluid custom-trio">
        <div class="rangking">
          <div class="trio-sort">
            <h1>Rangking</h1>
          </div>
          <div class="trio-book">
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
          </div>
        </div>
        <div class="newArrival">
          <div class="trio-sort">
            <h1>Rangking</h1>
          </div>
          <div class="trio-book">
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
          </div>
        </div>
        <div class="recommended">
          <div class="trio-sort">
            <h1>Rangking</h1>
          </div>
          <div class="trio-book">
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
            <div class="trio-single-book">
              <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
              <div class="trio-text">
                <h2>Judul buku</h2>
                <p>genre buku</p>
                <p>&star; 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid container-all">
        <div class="all-text">
          <h1>All Books</h1>
        </div>
        <div class="container-fluid container-all-main">
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
          <div class="book-all">
            <img src="https://drive.google.com/thumbnail?id=1uKIeJ5XFqqRufClUMeSVZ-MYgBHk8GqW" alt="">
            <div class="text-all">
              <h4>judul buku</h4>
              <p>genre buku</p>
            </div>
          </div>
        </div>
      </div>
      <!-- all -->
    </div>


  </main>

</template>

<style scoped>
.container-custom {
  width: 90%;
  margin: 0 auto;
}

.custom-navbar {
  height: 140px;
  position: fixed;
  top: 0;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  margin-top: 140px;
}

.container-hero {
  background-image: linear-gradient(to bottom right, #E1C35D, #EEEBE1);
  padding: 0;
  height: 450px;
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
  /* border: 10px black solid; */
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
.container-popular h1 {
  width: 85%;
  margin: 50px auto;
}

.container-popular-main {
  display: flex;
  justify-content: space-around;
  width: 90%;

}

.book-popular {
  width: 185px;
  height: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #D9D9D9;
}

.book-popular img {
  width: 100%;
  height: 220px;
  object-fit: fill;
}

.text-popular {
  padding: 10px;

}

/* pupular css */

.custom-trio {
  display: flex;
  width: 90%;
  padding: 50px;
  justify-content: space-between;
  height: 750px;
  margin-top: 50px;
}

.rangking,
.newArrival,
.recommended {
  /* border: 1px black solid; */
  width: 30%;
  display: flex;
  flex-direction: column;
}

.trio-sort {
  margin-bottom: 50px;
  margin: 0 auto 50px;
  padding: 10px 50px 10px;
  display: flex;
  background-color: #D9D9D9;
  border-radius: 40px;
}

.trio-book {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
}

.trio-single-book {
  display: flex;
  height: 110px;
  padding: 10px 10px;

  background-color: #D9D9D9;
}

.trio-single-book img {
  height: 90px;
  width: 60px;
  object-fit: cover;
  box-shadow: 0 0 10px black;
}

.trio-text {
  padding: 0 40px;
  line-height: 10px;
}

/* trio css */

.container-all {
  margin-bottom: 100px;
  padding: 0 20px;
}

.all-text {
  width: 390px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: #D9D9D9;
  text-align: center;
  margin: 50px 0 50px 130px;
  padding: 35px 0;
}

.container-all-main {
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 100px;
}

.book-all {
  width: 185px;
  height: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #D9D9D9;
  flex-basis: 12%;
}

.book-all img {
  width: 100%;
  height: 220px;
  object-fit: fill;
}

.text-all {
  padding: 10px;
}
/* all css */


</style>