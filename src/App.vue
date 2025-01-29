<template>
  <VueHeader />
  <Greet />
  <Services />
  <Experience />
  <Portfolio />
  <VueFooter />
</template>

<script>
import Experience from './components/Experience.vue';
import VueFooter from './components/VueFooter.vue';
import Greet from './components/Greet.vue';
import VueHeader from './components/VueHeader.vue';
import Portfolio from './components/Portfolio.vue';
import Services from './components/Services.vue';


export default {
  name: 'App',
  components: {
    VueHeader,
    Greet,
    Services,
    Experience,
    Portfolio,
    VueFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
body{
  background-color: #e8e6e6;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Bebas Neue", serif;
}
.dark{
  background-color: hsla(0, 0, 0, 0.2);
}
</style>
