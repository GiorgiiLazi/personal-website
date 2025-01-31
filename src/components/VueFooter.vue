<template>
  <section class="footer">
    <div>
      <Transition name="fade-2" class="contact-box" appear>
        <button class="contact" @click="toggleShowContact" name="contact">
          <h2><span class="arrow material-symbols-outlined">arrow_downward</span> Contact Me <span class="arrow material-symbols-outlined">arrow_downward</span></h2>
        </button>
      </Transition>
      <div class="backdrop-box">
        <transition-group class="backdrop" name="backdrop" tag="ul" appear>
          <li
          v-show="showBackdrop" 
          v-for="(image, index) in images" 
          :key="image.alt"
          :style="{transitionDelay:`${index * 200}ms`}">
            <a :href="image.href">
              <img :src="image.src" loading="lazy" :alt="image.alt" />
            </a>
          </li>
        </transition-group>
      </div>
        
    </div>
    <p class="copyright">Copyright &#169; {{ date }} All rights reserved</p>
  </section>
</template>

<script setup>

import { ref, reactive } from "vue";
const date = new Date().getFullYear()
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
.footer{
  position: relative;
    background: rgb(43, 43, 43);
    color: white;
    height: 40vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.contact-box{
  display: flex;
  flex-direction: column;
  background: rgb(43, 43, 43);
  width: 100%;
  color: white;
  align-self: center;
  top: 0px;
  padding: 20px 50x;
  font-size: 1.5em;
}
.contact {
  max-width: 100%;
  background-color: none;
  position: absolute;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 1.2em;
  border-radius: 4px;
  font-family: "Bebas Neue", serif;;
}
.contact{
  position: relative;
  align-content: center;
  align-items: center;
  background-color: none;
  word-wrap: break-word;
  padding: 20px;
  width: 100%;
}


.arrow {
  display: inline-block;
  animation: bounce 0.7s ease-in infinite;
}
.backdrop-box {
  position: relative;
  top: 0px;
  max-width: 100vw;
  height: auto;
}
.backdrop {
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: 0;
  left: 0;
  top: 0;
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
.copyright{
  align-self: center;
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
    transform: translateY(200px);
}
.backdrop-enter-to, .backdrop-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.backdrop-leave-from{
  position: absolute;
}
.backdrop-enter-active, .backdrop-leave-active {
  transition: all 1s ease-in-out;
}


</style>