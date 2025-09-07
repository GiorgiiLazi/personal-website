<template>
  <section class="greet-container">
    <article>
      <h1>Let's solve your problem</h1>
      <p>And figure out how to make you enterprize more profitable</p>
    </article>
    <div class="image-holder">
      <img src="../assets/coffee.webp" loading="lazy" alt="" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.greet-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b8b8f3;
}
.image-holder {
  width: 100vw;
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
article {
  text-align: left;
  word-wrap: wrap;
  animation: appear-left linear;
  animation-timeline: view();
  animation-range: entry 0 50%;
}
article > * {
  margin-left: 20px;
}
article h1 {
  font-size: 5em;
}
article p {
  font-size: 2em;
  color: #838383bb;
}
/* animations */

@keyframes appear-left {
  from {
    opacity: 0;
    transform: translateX(-200px) scale(0.2);
  }
  to {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}
@keyframes appear-right {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}
/* dynamic styles */
@media (max-width: 780px) {
  .greet-container {
    flex-direction: column;
  }
 
  .article {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .article > * {
    margin: 0;
    width: 100%;
    word-wrap: break-word;
  }
}
</style>
