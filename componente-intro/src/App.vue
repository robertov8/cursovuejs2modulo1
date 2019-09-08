<template>
  <div id="app">
    <h1>Contadores</h1>
    {{ contador }}

    <div>
      <button @click="contador++">+</button>
      <button @click="contador--">-</button>
    </div>
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
