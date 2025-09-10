<template>
    

  <section class="portfolio-container">
    <h1 class="title">Portfolio</h1>
    <ul class="box">
        <li 
        v-for="card in projectCards" 
        :key="card.name" 
        class="card">
            <div class="img-holder">
                <a 
                :href='card.projURL'>
                    <img class="img"
                     fetchpriority="low" 
                     loading="lazy"
                     decoding="async" 
                     :src="card.imgSrc" 
                     :alt="card.name">
                </a>
            </div>
            <h1>{{ card.name }}</h1>
            <div class="desc">
                <a class="link" :href="card.projURL">
                    <button >WebSite</button>
                </a>
            </div>
            
        </li>
    </ul>
  </section>
</template>

<script setup>
import { reactive } from 'vue';


const projectCards = reactive([
    {   
        name: 'Burger Place',
        projURL: 'https://giorgiilazi.github.io/burger-place/',
        imgSrc: require("../assets/portfolio/burger.webp"),
      
    },
    {   
        name: 'KSM - construction company',
        projURL: 'https://ksm-spb.ru/',
        imgSrc: require("../assets/portfolio/ksm.webp"),
      
    },
    {   
        name: 'Epicurean travel',
        projURL: 'https://epicur.netlify.app/',
        imgSrc: require("../assets/portfolio/Epicur.webp"),
      
    },

    {   
        name: 'Geo-Planet',
        projURL: 'https://giorgiilazi.github.io/geo-planet/',
        imgSrc: require("../assets/portfolio/geo.webp"),
   
    },
    {   
        name: 'Dictionary App',
        projURL: 'https://giorgiilazi.github.io/Dictionary-app/public/index.html',
        imgSrc: require("../assets/portfolio/dictionary.webp"),
        
    },
    {   
        name: 'Kintrishi club',
        projURL: 'https://giorgiilazi.github.io/Kintrishi-webpage/',
        imgSrc: require("../assets/portfolio/kintrishi.webp"),
    },
    {   
        name: 'BMI App',
        projURL: 'https://giorgiilazi.github.io/bmi-index/',
        imgSrc: require("../assets/portfolio/bmi.webp"),
    }
])



</script>

<style scoped>
.title{
    margin: 50px auto;
    display: grid;
    color: rgb(243, 168, 66);
    background:rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    font-size: 4em;
    grid-column: 1/-1;
    grid-row: 1;
    width: 90%;
}
.portfolio-container{
    display: grid;
    display: flex;
    flex-direction: column;
    justify-items: center;;
    align-items: center;
    max-width: 1200px;
    padding: 20px;
}
.box{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-columns: minmax(300px, auto);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
    list-style: none;
    
    
}
.box li{
    border-radius: 20px;
    background-color: rgb(241, 154, 32);
    flex: 1 1 300px;

}
.box li:hover{
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
    background-color: rgb(255, 150, 3);
}
.img{
    max-width: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;;
}

.box h1{
    text-align: center;
}
.desc{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    

}
.desc a{
    display: flex;
    align-content: center;
    margin-bottom: 15px;
    border: none;
    background: #6363ff;
    padding: 10px 15px;
    max-width: 100%;
    text-align: center;
    text-decoration: none;
    
}
.desc a button{
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    text-transform: uppercase;
    text-align: center;
    color: white;
    font-size: 1.2em;
    max-width: 100%;
    object-fit: cover;
}
.desc a:hover{
    background: #0000ea;
}
@media (max-width: 768px) {
  .box {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .portfolio-container:not(:first-child) {
    flex: 1 1 300px; /* Grow, shrink, and start at 300px width */
    max-width: 100%;
    }
}
</style>