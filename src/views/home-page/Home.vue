<template>
  <div class="home">
    <NasaComponent :showDesc="showDesc"/>

   

    <button v-on:click="showDesc = !showDesc">Show Description</button>

  
  </div>
</template>

<script src="./Home.js"></script>

<style lang="scss" scooped src="./Home.scss"></style>
