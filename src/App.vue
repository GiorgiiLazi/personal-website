<template>
  <Header />
  <Greet />
  <Header />
</template>

<script>
import Greet from './components/Greet.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Greet
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
body{
  background-color: #e8e6e6;
  box-sizing: border-box;;
  padding: 0;
  margin: 0;
  font-family: "Inter", serif;
}
</style>
