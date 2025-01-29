<template>
  <section class="header-container">
    <Transition class="image" name="img" appear>
      <img src="../assets/photo1.png" alt="my-phote" />
    </Transition>
    <div class="title">
      <Transition name="fade" appear>
        <p class="name">Giorgi Lazishvili</p>
      </Transition>
      <Transition name="fade-1" appear>
        <h3 class="position" name="position">
          WordPress Developer / WebDeveloper
        </h3>
      </Transition>
      <Transition name="fade-2" appear>
        <button class="contact" @click="toggleShowContact" name="contact">
          <span class="arrow material-symbols-outlined">arrow_downward</span>
          <span>Contact Me</span>
        </button>
      </Transition>
      <div class="backdrop-box">
        <transition-group class="backdrop" name="backdrop" tag="ul" appear>
          <li
          v-if="showBackdrop" 
          v-for="(image, index) in images" 
          :key="image.alt"
          :style="{transitionDelay:`${index * 200}ms`}">
            <a :href="image.href">
              <img :src="image.src" :alt="image.alt" />
            </a>
          </li>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const showBackdrop = ref(false);
const images = reactive([
  {
    href: "https://wa.me/+995555504380",
    src: "https://img.icons8.com/color/48/whatsapp--v1.png",
    alt: "whatsupp",
    delay: "200ms"
  },
  {
    href: "https://t.me/LaziGio",
    src: "https://img.icons8.com/color/48/telegram-app--v1.png",
    alt: "telegram",
    delay: "400ms"
  },
  {
    href: "mailto:malazi140@gmail.com",
    src: "https://img.icons8.com/fluency/48/gmail-new.png",
    alt: "gmail",
    delay: "600ms"
  },
  {
    href: "https://github.com/GiorgiiLazi",
    src: "https://img.icons8.com/fluency/48/github.png",
    alt: "github",
    delay: "800ms"
  },
  {
    href: "https://www.linkedin.com/in/giolaz/",
    src: "https://img.icons8.com/fluency/48/linkedin.png",
    alt: "Linkedin",
    delay: "1000ms"
  },
]);

const toggleShowContact = () => {
  if (showBackdrop.value === false) {
    showBackdrop.value = true;
  } else {
    showBackdrop.value = false;
  }
};
</script>

<style scoped>
.header-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
}
.header-container * {
  width: 50%;
}
.bkg {
  background-image: url("@/assets/photo1.png");
}
.image {
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.image img {
  max-width: auto;
  height: 100%;
  object-fit: cover;
}
.title {
  word-wrap: wrap;
  margin-left: 20px;
  color: #130e07;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title * {
  width: 100%;
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
.contact {
  position: relative;
  cursor: pointer;
  border: 1px solid #4160ff;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  max-width: max-content;
  background: #4160ff;
  color: white;
  border-radius: 4px;
  margin-bottom: 20px;
}
.contact:hover {
  background: #002aff;
}

.arrow {
  display: inline-block;
  animation: bounce 0.7s ease-in infinite;
}
.backdrop-box {
  position: relative;
  width: 100%;
  height: auto;
}
.backdrop {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
  width: 100%;
  height: auto;
}
.backdrop li img {
  width: 48px;
  height: 48px;
}
.backdrop li a {
  width: 100%;
  height: 100%;
}
/* animations */

/* @keyframes wobble {
    0%{ opacity: 0; transform: translateX(600px); filter: blur(5px) }
    50%{ opacity: 1; transform: translateX(-10px) }
    60%{ transform: translateX(10px) }
    70%{ transform: translateX(-4px) }
    80%{ transform: translateX(4px) }
    90%{ transform: translateX(-2px) }
    100%{ transform: translateX(0); filter: blur(0) }
} */

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.backdrop-enter-from, .backdrop-leave-to{
    opacity: 0;
    transform: translateY(100px);
}
.backdrop-enter-to, .backdrop-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.backdrop-leave-from{
  position: absolute;
}
.backdrop-enter-active, .backdrop-leave-active, .backdrop-move {
  transition: all 1s ease-in-out;
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
