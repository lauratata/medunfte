<template>
  <div id="app">

    <router-view />

    <carousel :autoplay="true" :nav="false">

      <img src="https://placeimg.com/200/200/any?1">

      <img src="https://placeimg.com/200/200/any?2">

      <img src="https://placeimg.com/200/200/any?3">

      <img src="https://placeimg.com/200/200/any?4">

      <img src="https://placeimg.com/200/200/any?3">

    </carousel>

    <footer>
      <div class="flex">
        <p><img src="../static/img/logo.png" alt="Logo Medunfte" class="mdftlogo">
          Medunfte</p>
        <div class="websites">
          <a href="https://fr.linkedin.com/in/laurataormina"><img src="../static/img/linkedin.svg" alt="LinkedIn"></a>
          <a href="https://opensea.io/fr"><img src="../static/img/OpenSea.svg" alt="OpenSea"></a>
        </div>
      </div>
      <a href="#">© laura taormina 2023</a>
    </footer>

  </div>
</template>

<script>

// Import Owl Carousel

import carousel from 'vue-owl-carousel'

export default {
  name: 'App',
  components: { carousel },
}
</script>

<style></style>
