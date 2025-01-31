<template>
  <section class="portfolio-container">
    <h1 class="title">Portfolio</h1>
    <ul class="box">
        <li 
        v-for="card in projectCards" 
        :key="card.name" 
        class="card">
            <div class="img-holder">
                <a :href="card.projURL">
                    <img :src="card.imgSrc" :alt="card.name">
                </a>
            </div>
            <h1>{{ card.name }}</h1>
            <div class="desc">
                <a class="link" :href="card.projURL">
                    <button >WebSite</button>
                </a>
                <a class="repo" :href="card.repoURL"> 
                    <button >Repo</button>
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
        repoURL: 'https://github.com/GiorgiiLazi/burger-place',
        imgSrc: require("../assets/portfolio/burger.png")
    },
    {   
        name: 'Epicurean travel',
        projURL: 'https://epicur.netlify.app/',
        repoURL: 'https://github.com/GiorgiiLazi/Epicur',
        imgSrc: require("../assets/portfolio/Epicur.png")
    },
    {   
        name: 'Tech-Pro',
        projURL: 'https://giorgiilazi.github.io/tech-pro/',
        repoURL: 'https://github.com/GiorgiiLazi/burger-place',
        imgSrc: require("../assets/portfolio/tech.png")
    },
    {   
        name: 'L-News',
        projURL: 'https://giorgiilazi.github.io/news-site/',
        repoURL: 'https://github.com/GiorgiiLazi/news-site',
        imgSrc: require("../assets/portfolio/news.png")
    },
    {   
        name: 'Geo-Planet',
        projURL: 'https://giorgiilazi.github.io/geo-planet/',
        repoURL: 'https://github.com/GiorgiiLazi/geo-planet',
        imgSrc: require("../assets/portfolio/geo.png")
    },
    {   
        name: 'Dictionary App',
        projURL: 'https://giorgiilazi.github.io/Dictionary-app/public/index.html',
        repoURL: 'https://github.com/GiorgiiLazi/Dictionary-app',
        imgSrc: require("../assets/portfolio/dictionary.png")
    },
    {   
        name: 'Kintrishi club',
        projURL: 'https://giorgiilazi.github.io/Kintrishi-webpage/',
        repoURL: 'https://github.com/GiorgiiLazi/Kintrishi-webpage',
        imgSrc: require("../assets/portfolio/kintrishi.png")
    },
    {   
        name: 'BMI App',
        projURL: 'https://giorgiilazi.github.io/bmi-index/',
        repoURL: 'https://github.com/GiorgiiLazi/bmi-index',
        imgSrc: require("../assets/portfolio/bmi.png")
    },
])
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}
.portfolio-container{
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

}
.box li:hover{
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
    background-color: rgb(255, 150, 3);
}
.box img{
    max-width: 100%;
    height: auto;
    border-radius: 20px 20px 0px 0px;
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
@media (min-width: 768px) {
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .portfolio-container:not(:first-child) {
    flex: 1 1 300px; /* Grow, shrink, and start at 300px width */
    max-width: 100%;
    }
}
</style>