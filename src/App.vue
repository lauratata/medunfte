<template>
  <div id="app">

    <router-view />

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

export default {
  name: 'App',
}
</script>

<style></style>
