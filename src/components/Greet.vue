<template>
  <section class="container">
      <article>
        <h1>Let's solve your problem</h1>
        <p>And figure out how to make you enterprize more profitable</p>
    </article>
      <div class="image-holder">
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
    animation: appear-right linear;
    animation-timeline: view();
    animation-range: entry 0 cover 50%;
}

.image-holder img {
    max-width: auto; 
    height: 100%; 
    object-fit: cover; 
}
article{
  text-align: left;
  word-wrap: wrap;
  animation: appear-left linear;
  animation-timeline: view();
  animation-range: entry 0 50%;
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
/* animations */

@keyframes appear-left{
  from{
    opacity: 0;
    transform: translateX(-200px) scale(0.2)
  }
  to{
    opacity: 1;
    transform: translate(0) scale(1)
  }
}
@keyframes appear-right{
  from{
    opacity: 0;
    transform: translateX(200px) 
  }
  to{
    opacity: 1;
    transform: translate(0)
  }
}
/* dynamic styles */
@media (max-width: 780px){
    .container{
        flex-direction: column;
    }
    .image-holder{
        display: none;
    }
    articel{
        width: 100%;
        word-wrap: break-word;
    }
}
</style>