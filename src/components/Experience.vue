<template>
  <section class="container">
    <header>
        <h1 class="title">About Me</h1>
    </header>
    <main class="box">
        <aside class="webstack">
            <h1>Webstack</h1>
        <ul> 
            <li>Vue.js</li>
            <li>WordPress</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Pinia</li>
            <li>Bootstrap</li>
            <li>Firebase</li>
            <li>Git</li>
            <li>Vite</li>
        </ul>
    </aside>
    <article class="about">
        <h1>Experience</h1>
        <p>Web developer with 3 years of commercial experience.</p>
        <p>Experience working with algorithms and their practical application </p>
        <p>I actively use AI solutions in developing web applications using ChatGPT, Deepseek, Canva, Tabnine.</p>
        <p>First I became interested in programming in 2021. Since then I've build dozens of applications for satisfied customers</p>
        <p>I worked as a freelancer on Fiverr, Upwork, YouDo, Profi</p>
        <div class="para">
            <h2>I offer you:</h2>
        <ol>
                <li>Technical skills and knowledge of Vue.js and JavaScript for complex application architecture.</li>
                <li>Experience with WordPress for creating custom solutions.</li>
                <li>Delivery on time, effectively managing mine and client's time</li>
        </ol>
        </div>
        
        <p>I am fluent in English at the C1 level, which allows me to read documentation and talk about abstract topics.</p>
        <p>I will be happy to discuss how my skills and experience can be useful to your company. I am open to any questions.</p>
    </article>
</main>
    
  </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container{
        width: 100vw;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #b8b8f3;
    }
        .title{
        text-align: center;
        font-size: 4em;
    }
    .box{
        width: 100%;
        max-height: auto;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
    .webstack{
        background-color:  rgb(243, 168, 66);
        color: black;
        padding: 0px 20px;
        border-radius: 20px;
    }
    .about{
        font-weight: bold;
        padding: 0px 20px;
    }
    .webstack li, h1{
        font-size: 1.8em;
    }
    .webstack h1{
        text-align: center;
    }

    p{
        font-family: Inter, serif;
    }
    .para{
        background: rgb(243, 168, 66);
        color: black;
        padding: 20px;
        font-family: Inter;
        border-radius: 20px;
    }
</style>