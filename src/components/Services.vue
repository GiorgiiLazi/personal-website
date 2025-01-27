<template>
  <section class="container">
    <h1 class="title">My services</h1>
    <div class="card" id="1" >
        <span class="material-symbols-outlined icon">architecture</span>
        <h1>Web Development on Vue.js</h1>
        <h3>Service description:</h3>
        <p>Building dynamic single-page applications (SPA) using Vue.js and Pinia</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Developing user interfaces</li>
            <li>Creating complex logic for Web Application</li>
            <li>Creating admin panels, dashboards, and interactive elements</li>
        </ul>

    </div>
    <div class="card" id="2" >
        <span class="material-symbols-outlined icon">draw</span>
        <h1>WordPress Development </h1>
        <h3>Service description:</h3>
        <p>Using CSS, JS, and Bootstrap to customize WordPress sites</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Refinement or creation of unique themes</li>
            <li>Adding interactive elements to the site</li>
            <li>Optimizing the user interface</li>
        </ul>
    </div>
    <div class="card" id="3" >
        <span class="material-symbols-outlined icon">domain_verification</span>
        <h1>Development of adaptive landings and websites</h1>
        <h3>Service description:</h3>
        <p>Creating responsive websites using HTML, CSS, Bootstrap, and JavaScript</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Developing landing pages for products, services, or events</li>
            <li>Creating multi-page websites for businesses</li>
            <li>Adaptation of websites for mobile devices</li>
        </ul>
    </div>
    <div class="card" id="4" >
        <span class="material-symbols-outlined icon">design_services</span>
        <h1>UI/UX components development</h1>
        <h3>Service description:</h3>
        <p>Creating user interfaces on Vue.js using components</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Development of interactive forms, modal windows, tables</li>
            <li>Creation of custom reusable widgets</li>
            <li>Adding animations and improving the visual appeal of the site.</li>
        </ul>
    </div>
    <div class="card" id="5" >
        <span class="material-symbols-outlined icon">subheader</span>
        <h1>SPA development</h1>
        <h3>Service description:</h3>
        <p>Developing SPAs to minimize page reloads and improve user experience.</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Switching between pages won't reload your page</li>
            <li>Creation of client parts for complex applications.</li>
            <li>Router optimization, 404 page, custom pages</li>
        </ul>
    </div>
    <div class="card" id="6">
        <span class="material-symbols-outlined icon">responsive_layout</span>
        <h1>Animations and interactive design</h1>
        <h3>Service description:</h3>
        <p>Adding animations and interactive elements using CSS and JavaScript.</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Scroll animation</li>
            <li>Hover effects, transitions, and loading screens</li>
            <li>Adding interactive graphs or charts</li>
        </ul>
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted, onUpdated} from 'vue'
import {useCustomAnimations} from './composables/customAnimations'
let cards = ref([])
let body = ref()
const { exportedCards, observer } = useCustomAnimations()
onMounted(()=>{
    cards.value = document.querySelectorAll('.card')
    body.value = document.body
    console.log(cards.value)

    cards.value.forEach(card => {
    observer.observe(card);
  });
})
onUpdated(() => {
  // Update cards whenever exportedCards are updated
  cards.value = exportedCards.value;
  cards.value.forEach(card => {
    observer.observe(card);  // Re-observe if cards are updated
  });
});



</script>

<style scoped>

.container{
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-auto-rows: minmax(auto 600px);
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
}
.container > * {
    margin: 10px;
}
.title{
    text-align: center;
    font-size: 4em;
    grid-column: 1/-1;
    grid-row: 1;
}
.card{
    position: relative;
    opacity: 0;
    transform: translateX(-100%);
    filter: blur(5px);
    display: inline-grid;
    padding: 20px;
    border-radius: 30px;
    width: 500px;
    height: min-content;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    background-color: rgb(243, 168, 66);
    word-wrap: wrap;
    z-index:1;
    transition: 1s all ease-in
}
.card:nth-child(2){
    transition-delay: 200ms;
}
.card:nth-child(3){
    transition-delay: 400ms;
}
.card:nth-child(4){
    transition-delay: 600ms;
}
.card:nth-child(5){
    transition-delay: 800ms;
}
.card:nth-child(6){
    transition-delay: 1000ms;
}
.show{
    opacity: 1;
    transform: translateX(0);
    filter: blur(0)
}

.card:hover{
    animation: all 1s ease-in;
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.6);

}

#card1{
    grid-column: 1;
    grid-row: 2
}
#card2{
    grid-column: 2;
    grid-row: 2
}
#card3{
    grid-column: 1;
    grid-row: 3
}
#card4{
    grid-column: 2;
    grid-row: 3
}
#card5{
    grid-column: 1;
    grid-row: 4
}
#card6{
    grid-column: 2;
    grid-row: 4
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: black;
    color: white;
    top: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    border-radius: 0% 50% 0 50%;
    z-index: 3;
}


</style>