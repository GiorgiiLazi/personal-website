<template>
  <section class="services-container">
    <h1 class="title">My services</h1>
    <div class="card" id="1" >
        <span class="material-symbols-outlined icon">architecture</span>
        <h1>Web Development Vue.js</h1>
        <h3>Service description:</h3>
        <p>Building dynamic web apps with Vue.js</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Developing user interfaces</li>
            <li>Creating complex logic for Web Application</li>
            <li>Creating admin panels, dashboards, and interactive elements</li>
        </ul>

    </div>
    <div class="card" id="2" >
        <span class="material-symbols-outlined icon">draw</span>
        <h1>WordPress Development</h1>
        <h3>Service description:</h3>
        <p>Customizing WordPress templates for you needs</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Refinement or creation of unique themes</li>
            <li>Adding interactive elements to the site</li>
            <li>Optimizing the user interface</li>
        </ul>
    </div>
    <div class="card" id="3" >
        <span class="material-symbols-outlined icon">domain_verification</span>
        <h1>Landings</h1>
        <h3>Service description:</h3>
        <p>Creating responsive websites for marketing, advertising purposes</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Developing landing pages for products, services, or events</li>
            <li>Creating multi-page websites for businesses</li>
            <li>Adaptation of websites for mobile devices</li>
        </ul>
    </div>
    <div class="card" id="4" >
        <span class="material-symbols-outlined icon">design_services</span>
        <h1>UI/UX Design</h1>
        <h3>Service description:</h3>
        <p>Creating user-friendly and visually appealing interfaces</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Development of interactive forms, modal windows, tables</li>
            <li>Creation of custom reusable widgets</li>
            <li>Adding animations and improving the visual appeal of the site</li>
        </ul>
    </div>
    <div class="card" id="5" >
        <span class="material-symbols-outlined icon">subheader</span>
        <h1>SPA building</h1>
        <h3>Service description:</h3>
        <p>Developing SPAs to minimize page reloads and improve user experience</p>
        <h3>Task Examples:</h3>
        <ul>
            <li>Switching between pages won't reload your page</li>
            <li>Creation of client parts for complex applications</li>
            <li>Router optimization, 404 page, custom pages</li>
        </ul>
    </div>
    <div class="card" id="6">
        <span class="material-symbols-outlined icon">responsive_layout</span>
        <h1>Animations</h1>
        <h3>Service description:</h3>
        <p>Adding animations and interactive elements</p>
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
import {useObserver} from './composables/Observer'
let cards = ref([])
const { exportedCards, observer } = useObserver()

onMounted(()=>{
    cards.value = document.querySelectorAll('.card')
    cards.value.forEach(card => {
    observer.observe(card);
  });
})
onUpdated(() => {
  cards.value = exportedCards.value;
  cards.value.forEach(card => {
    observer.observe(card);  // Re-observe if cards are updated
  });
});



</script>

<style scoped>

.services-container{
    background-image: url('@/assets/webdev.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
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
.services-container > * {
    margin: 10px;
}
.title{
    color: rgb(243, 168, 66);
    background:rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    font-size: 4em;
    grid-column: 1/-1;
    grid-row: 1;
}
.card{
    text-align: center;
    position: relative;
    opacity: 0;
    transform: translateX(-100%);
    filter: blur(5px);
    display: inline-grid;
    border-radius: 30px;
    min-width: 350px;
    max-width: 500px;
    height: min-content;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    background-color: rgb(243, 168, 66);
    word-wrap: wrap;
    z-index:1;
    transition: 0.5s all ease-out;
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
    transition-delay: 850ms;
}
.show{
    opacity: 1;
    transform: translateX(0);
    filter: blur(0)
}

.card:hover{
    animation: all 0.3s ease-in;
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.6);
    background-color:rgb(255, 149, 0)

}
.card h1{
    word-wrap: break-word;
}
.card h3{
    width: 100%;
    background: black;
    color: white;
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
ul{
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left;
    padding: 15px;
}
/* dynamic styles */

@media (max-width: 780px){
    .services-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
    flex-direction: column;
    }
    .card {
    flex: 1 1 300px; /* Grow, shrink, and start at 300px width */
    max-width: 100%;
    }
}

</style>