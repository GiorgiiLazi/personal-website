<template>
  <Header />
  <Greet />
  <Services />
</template>

<script>
import Greet from './components/Greet.vue';
import Header from './components/Header.vue';
import Services from './components/Services.vue';

export default {
  name: 'App',
  components: {
    Header,
    Greet,
    Services
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
body{
  background-color: #e8e6e6;
  box-sizing: border-box;;
  padding: 0;
  margin: 0;
  font-family: "Bebas Neue", serif;
}
.dark{
  background-color: hsla(0, 0, 0, 0.2);
}
</style>
