<template>
  <div id="app">
    <h1>Contadores</h1>
    <app-contador></app-contador>
    <app-contador></app-contador>
    <app-contador></app-contador>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {contador: 0};
    }
  }
</script>

<style>

</style>
