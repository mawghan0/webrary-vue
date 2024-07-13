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
      <div class="container container-footer">
        <div class="masukan">
          <form action="">
            <label for="">
              <h5>Ada masukan untuk kami?</h5>
            </label>
            <input type="text" name="" id="" placeholder="Nama">
            <input type="email" name="" id="" placeholder="Email">
            <input type="text" name="" id="feedback" placeholder="Feedback">
            <input type="button" value="Kirim" id="kirim">
          </form>
        </div>
        <div class="peminjaman">
          <h5>Peminjaman</h5>
          <h6>Perpustakaan</h6>
          <h6>Daftar Buku</h6>
          <h6>Peminjaman</h6>
          <h6>Pengembalian</h6>
        </div>
        <div class="hubungi">
          <h5>Hubungi Kami</h5>
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook"
              viewBox="0 0 16 16">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram"
              viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x"
              viewBox="0 0 16 16">
              <path
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </div>
        </div>
        <div class="lainnya">
          <h5>Lainnya</h5>
          <h6>Syarat & Ketentuan</h6>
          <h6>Kebijakan & Privasi</h6>
          <h6>Bantuan</h6>
        </div>
      </div>
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
  border: 3px black solid;
  border-radius: 10px;
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
  column-gap: 24px;
}

.book-popular {
  flex-basis: 15%;
  height: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #D9D9D9;
  box-shadow: 10px 10px 20px black;
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
  box-shadow: 10px 10px 20px black;
}

.trio-book {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  /* overflow: hidden; */
}

.trio-single-book {
  display: flex;
  height: 110px;
  padding: 10px 10px;
  box-shadow: 10px 10px 20px black;
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
  box-shadow: 10px 10px 20px black;
}

.container-all-main {
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 60px;
}

.book-all {
  /* width: 185px; */
  height: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #D9D9D9;
  flex-basis: 15%;
  box-shadow: 10px 10px 20px black;
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
.container-footer {
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
  justify-content: space-evenly;
  /* margin-bottom: 50px; */
  height: 400px;
}

.masukan form {
  display: flex;
  flex-direction: column;

  height: 75%;
  justify-content: space-around;
}

.masukan form input {
  height: 50px;
  width: 330px;


}

#feedback {
  height: 100px;
}

#kirim {
  width: 60px;
  height: 30px;
  align-self: flex-end;
}

.peminjaman {
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 40%;
  justify-content: space-around;
}

.peminjaman h6 {
  font-weight: 400;
}

.logo {
  display: flex;
  /* border: 1px solid black; */
  width: 70%;
  justify-content: space-between;
}

.lainnya h6 {
  font-weight: 400;
}
</style>