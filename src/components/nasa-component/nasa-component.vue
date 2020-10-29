
<template>
  <div class="nasa-comp">
    <h1>{{ ApiObj.title }}</h1>
    <h2>{{ ApiObj.date }}</h2>

    <div class="img-box">
      <img :src="ApiObj.url" :alt="ApiObj.title" />
      <h1>Click For HD Image</h1>
      <a :href="ApiObj.hdurl"></a>
    <p class="copyright"><span>&copy; Copyright</span> <br> {{ApiObj.copyright}}</p>
    </div>


    <h4>Select a date to see previous days image</h4>
     <DatePickerComponent @seledtedDateEvent="selectedDateOutput"/>

    <p v-if="showDesc">{{ ApiObj.explanation }}</p>
    <div v-if="onError">Something Went wrong, try again later...</div>


    <SpinnerComponent v-if="loading"/>

  </div>
</template>

<script  src="./nasa-component.js"></script>
<style lang="scss" scoped src="./nasa-component.scss">
</style>