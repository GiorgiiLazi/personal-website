<template>
  <section class="header-container">
    <Transition class="image" name="img" appear>
      <img fetchpriority="'high'" loading="eager" src="../assets/webdeveloper.webp" alt="webdeveloper's happy face" />
    </Transition>
    <div class="title">
      <Transition name="fade" appear>
        <p class="name">Giorgi Lazishvili</p>
      </Transition>
      <Transition name="fade-1" appear>
        <h3 class="position" name="position">
          Vue.js Developer / WebDeveloper
        </h3>
      </Transition>
     
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.header-container {
  position: relative;
  width: 100vw;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container * {
  width: 50%;
}
.bkg {
  background-image: url("@/assets/webdeveloper.webp");
}
.image {
    max-width: 100%;
    height: auto;
}

.image img {
  width: 120px;
    min-height: 120px;
    max-height: auto;
    float: left;
    margin: 3px;
    padding: 3px;
}
.title {
  position: relative;
  top: 0px;
  color: #130e07;
  display: flex;
  flex-direction: column;
  justify-content:stretch;
  padding-left: 20px;

}
.title * {
  max-width: 100%;
}
.name {
  font-size: 6em;
}
.position {
  text-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.8);
  font-size: 3em;
  width: 100%;
  color: grey;
}

.img-enter-from {
  opacity: 0;
}
.img-enter-active {
  transition: all 1s ease-in;
}
.img-enter-to {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(200px);
}
.fade-enter-active {
  transition: all 0.5s ease-in;
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.fade-1-enter-from {
  opacity: 0;
  transform: translateY(200px);
}
.fade-1-enter-active {
  transition: all 0.7s ease-in;
}
.fade-1-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.fade-2-enter-from {
  opacity: 0;
  transform: translateY(200px);
}
.fade-2-enter-active {
  transition: all 1.5s ease;
}
.fade-2-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.arrow-enter-from {
  transform: translateY(0px);
}
.arrow-enter-active {
  transition: all 0.3s ease-in-out;
}
.arrow-enter-to {
  transform: translateY(10px);
}

/* dynamic styles */
@media (max-width: 1200px) {
  .name {
    font-size: 5em;
  }
  .position {
    font-size: 1.8em;
  }
}

@media (max-width: 780px) {
  .header-container {
    flex-direction: column;
    max-height: 100%;
  }
  .image {
    width: 100%;
    height: auto;
  }
  .title {
    width: 100%;
    word-wrap: break-word;
  }
  .name {
    font-size: 3em;
  }
}
</style>
