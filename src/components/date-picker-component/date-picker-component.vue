<template>
  <div class="date-picker">
    <date-picker @change="onDateSelect($event)" v-model="dateToComponent"></date-picker>
    
  </div>
</template>

<script src="./date-picker-component.js"></script>
<style scpoped lang="scss" src="./date-picker-component.scss"></style>