<template>
  <section class="container">
    <article v-motion-slide-visible-left>
      <h1>Lets solve your problem</h1>
      <p>And figure how to make you enterprize more profitable</p>
    </article>
    <div v-motion-slide-visible-right class="image-holder">
      <img src="../assets/coffee.png" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-holder {
    width: 100%;
    height: 100vh; 
    display: flex; 
    justify-content: center; 
    overflow: hidden; 
}

.image-holder img {
    max-width: auto; 
    height: 100%; 
    object-fit: cover; 
}
article{
  text-align: left;
  word-wrap: wrap;
}
article > *{
  margin-left: 20px;
}
article h1{
  font-size: 5em
}
article p{
  font-size: 2em;
  color: #838383bb
}
</style>