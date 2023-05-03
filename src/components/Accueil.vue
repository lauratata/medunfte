<template>
  <div>
    <nav class="navbar">
      <router-link to="/french" class="logo">
        <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/logo.png" alt="Logo Medunfte"
          class="mdftheader">
        Medunfte
      </router-link>
      <div class="nav-links">
        <ul>
          <li><a href="#" v-scroll-to="'.offf'">le projet abyssal</a></li>
          <li><a href="#" v-scroll-to="'.offf'">medunfte nft collection</a></li>
          <li><a href="#" v-scroll-to="'.offf'">offf barcelone 2023</a></li>
          <li>
            <router-link to="/">english</router-link>
          </li>
        </ul>
      </div>

      <!-- <img src="img/menu-btn.png" alt="Menu hamburger" class="menu-hamburger"> -->
      <div class="menu-hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    <body>
      <header>
        <h1>Medunfte</h1>
        <button v-scroll-to="'#scroll2'">Découvrez la collection</button>
      </header>

      <span class="waves"></span>

      <!-- SECTION PRESENTATION PROJET  -->

      <section class="offf" v-for="textefr in liste" :key="textefr.id">
        <h1>{{ textefr.acf.titre }}</h1>
        <h2>{{ textefr.acf.soustitre }}</h2>
        <div class="column">
          <div class="subcolumn">
            <p>{{ textefr.acf.paragraphe }}</p>
            <div class="button">
              <a href="https://www.offf.barcelona/">OFFF
                website
              </a>
            </div>
          </div>
          <div class="subcolumn">
            <img :src="textefr.acf.photo" alt="Festival OFFF" class="photos">
          </div>
        </div>
      </section>

      <span class="waves2"></span>

      <div id="scroll2"></div>
      <!-- SECTION MEDUNFTE -->
      <section>
        <h1>Medunfte</h1>
        <h2>Partie de la collection de nfts abyssal</h2>

        <h3>couleurs</h3>
        <div class="color-buttons">
          <button>Classic</button>
          <button>Night mode</button>
          <button>Neon Pink</button>
          <button>Pink</button>
        </div>

        <!--  SLIDER -->
        <carousel>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/steampunk-300x300.png">
          </carousel-slide>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/modern-300x300.png">
          </carousel-slide>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/medunfte-300x300.png">
          </carousel-slide>

          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/steampunk-neon-300x300.png">
          </carousel-slide>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/modern-neon-300x300.png">
          </carousel-slide>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/medunfte-neon-300x300.png">
          </carousel-slide>

          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/steampunk-rose-300x300.png">
          </carousel-slide>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/modern-rose-300x300.png">
          </carousel-slide>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/medunfte-rose-300x300.png">
          </carousel-slide>

          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/steampunk-nightmode-300x300.png">
          </carousel-slide>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/modern-nightmode-300x300.png">
          </carousel-slide>
          <carousel-slide>
            <img src="https://backmedunfte.laurataormina.fr/wp-content/uploads/2023/05/medunfte-nightmode-300x300.png">
          </carousel-slide>
        </carousel>

      </section>

      <span class="waves"></span>

      <!-- SECTION OFFF -->
    </body>
  </div>
</template>

<script>

import Carousel from './carousel/Carousel.vue'
import CarouselSlide from './carousel/CarouselSlide.vue'

import param from '@/param/param'

export default {
  name: 'Accueil',
  components: {
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      liste: [],
      nft: []
    }
  },
  created() {
    axios.get(param.host + "textefr").then(response => {
      console.log("Reponse", response);
      this.liste = response.data;
    })
      .catch(error => console.log(error))
  },

  async mounted() {
    axios.get(param.host + "nft").then(response => {
      console.log("NFT Reponse", response);
      this.nft = response.data;
    })
      .catch(error => console.log(error))
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".nav-links");

    menuHamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-menu')
    });

    menuHamburger.addEventListener('click', () => {
      menuHamburger.classList.toggle('open')
    });

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
</script>

<style></style>