<template>
  <AppHeader></AppHeader>
  <Conteiner></Conteiner>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import Conteiner from './components/Conteiner.vue';



export default {
  name: 'App',
  components: {
    AppHeader,
    Conteiner
}
}
</script>

<style>
body{
  margin: 0;
  color:#262837;
}
</style>
