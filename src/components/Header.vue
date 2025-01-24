<template>
  <div class="container">
    <Transition class="image" name="img" appear>
        <img src="../assets/photo1.png" alt="my-phote">
    </Transition>
    <div class="title">
        <Transition name="fade" appear>
            <p class="name">Giorgi Lazishvili</p>
        </Transition>
        <Transition name="fade-1" appear>
            <h3 class="position" name="position">WordPress Developer / Web Developer </h3>
        </Transition>
        <Transition name="fade-2" appear>
            <button class="contact" name="contact">
                <span class="arrow material-symbols-outlined"> arrow_downward</span>
                <span>Contact Me</span>
                <span class="backdrop">Email: malazi140@gmail.com</span>
            </button>
        </Transition>
        
        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container *{
    width: 50%;
}
.bkg{
    background-image: url('@/assets/photo1.png');
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
.title{
    margin-left: 20px;
    color: #130e07;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.title *{
    width: 100%;
}
.name{
 
  font-size: 6em;
}
.position{
    font-size: 2em;
    width: 100%;
    color: grey;
}
.contact{
    position: relative;
    cursor: pointer;
    border: 3px solid #130e07;
    display: flex;
    align-items: center;
    font-size: 1.2em;
    max-width: max-content;
    background: none;
    color: #130e07;
    
    border-radius: 4px;

}
.backdrop{
    text-align: start;
    width: 600px;
    display: none;
    position: absolute;
    top: 50px;
    left: 0px;
    color: black;
    animation: wobble 1s ease-in;
}
.contact:hover .backdrop{
    display: block;
}
.arrow {
  display: inline-block;
  animation: bounce 0.7s ease-in-out infinite; /* Infinite animation */
}

.contact:hover{
    background: #130e07;
    color: white
}
.contact:focus{
    transform: rotateX(50px)
}

/* animations */

@keyframes wobble{
    0%{ opacity: 0; transform: translateX(600px) }
    50%{ opacity: 1; transform: translateX(-10px) }
    60%{ transform: translateX(10px) }
    70%{ transform: translateX(-4px) }
    80%{ transform: translateX(4px) }
    90%{ transform: translateX(-2px) }
    100%{ transform: translateX(0) }
}
.img-enter-from{
    opacity: 0;
    
}
.img-enter-active{
    transition: all 1s ease-in;
}
.fimgenter-to{
    opacity: 1;
    
}

.fade-enter-from{
    opacity: 0;
    transform: translateY(200px);
}
.fade-enter-active{
    transition: all 0.5s ease-in;
}
.fade-enter-to{
    opacity: 1;
    transform: translateY(0px)
}
.fade-1-enter-from{
    opacity: 0;
    transform: translateY(200px);
}
.fade-1-enter-active{
    transition: all 0.7s ease-in;
}
.fade-1-enter-to{
    opacity: 1;
    transform: translateY(0px)
}
.fade-2-enter-from{
    opacity: 0;
    transform: translateY(200px);
}
.fade-2-enter-active{
    transition: all 1.5s ease;
}
.fade-2-enter-to{
    opacity: 1;
    transform: translateY(0px)
}
.arrow-enter-from{
    transform: translateY(0px)
}
.arrow-enter-active{
    transition: all 0.3s ease-in-out
}
.arrow-enter-to{
    transform: translateY(10px)
}


@keyframes bounce {
  0%, 100% {
    transform: translateY(0); /* Start and end at the original position */
  }
  50% {
    transform: translateY(10px); /* Move down by 10px */
  }
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

@media (max-width: 780px){
    .container{
        flex-direction: column;
    }
    .image{
        width: 100%;
        height: auto;
    }
    .title{
        width: 100%;
        word-wrap: break-word;
    }
    .name{
        font-size: 3em
    }
}
</style>