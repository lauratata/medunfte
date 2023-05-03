<template>
  <div>
    <nav class="navbar">
      <a href="#" class="logo">Medunfte</a>
      <div class="nav-links">
        <ul>
          <li><a href="#" v-scroll-to="'.offf'">the abyssal project</a></li>
          <li><a href="#" v-scroll-to="'.offf'">medunfte nft collection</a></li>
          <li><a href="#" v-scroll-to="'.offf'">offf barcelona 2023</a></li>
          <li>
            <router-link to="/french/">français</router-link>
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
        <button v-scroll-to="'#scroll2'">Discover the collection</button>
      </header>

      <span class="waves"></span>

      <!-- SECTION PRESENTATION PROJET  -->

      <section class="offf" v-for="texte in liste" :key="texte.id" ref="bottom">
        <h1>{{ texte.acf.title }}</h1>
        <h2>{{ texte.acf.subtitle }}</h2>
        <div class="column">
          <div class="subcolumn">
            <p>{{ texte.acf.paragraph }}</p>
            <div class="button">
              <a href="https://www.offf.barcelona/">OFFF
                website
              </a>
            </div>
          </div>
          <div class="subcolumn">
            <img :src="texte.acf.photo" alt="Festival OFFF" class="photos">
          </div>
        </div>
      </section>

      <span class="waves2"></span>

      <!-- SECTION MEDUNFTE -->
      <div id="scroll2"></div>
      <section>
        <h1>Medunfte</h1>
        <h2>Part of the Abyssal NFT Collection</h2>

        <h3>colors</h3>
        <div class="color-buttons">
          <button>Classic</button>
          <button>Night mode</button>
          <button>Neon Pink</button>
          <button>Pink</button>
        </div>

        <!--  SLIDER -->

        <carousel>
          <carousel-slide>
            <img src="https://picsum.photos/id/237/200/300">
          </carousel-slide>
          <carousel-slide>
            <img src="https://picsum.photos/seed/picsum/200/300">
          </carousel-slide>
          <carousel-slide>
            <img src="https://picsum.photos/200/300/?blur">
          </carousel-slide>
        </carousel>


        <!-- <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
          slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
          coverflow-effect-modifier="1" coverflow-effect-slide-shadows="false" autoplay-delay="2500"
          autoplay-disable-on-interaction="false">
          <swiper-slide v-for="nft in nft" :key="nft.id">
            <img :src="nft.acf.photo" :alt="nft.acf.id" />
          </swiper-slide>
        </swiper-container> -->

        <span class="waves"></span>

      </section>

      <!-- SECTION OFFF -->
    </body>
  </div>
</template>

<script>

import Carousel from './carousel/Carousel.vue'
import CarouselSlide from './carousel/CarouselSlide.vue'

import param from '@/param/param'

export default {
  name: 'Home',
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
    axios.get(param.host + "texte").then(response => {
      /* console.log("Reponse", response); */
      this.liste = response.data;
    })
      .catch(error => console.log(error))
  },
  async mounted() {
    axios.get(param.host + "nft").then(response => {
      /* console.log("NFT Reponse", response); */
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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
