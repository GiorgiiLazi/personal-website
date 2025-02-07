<template>
  <section class="experience-container">
    <header>
        <h1 class="title">About Me</h1>
    </header>
    <main class="box">
        <aside class="webstack">
            <h1>Webstack</h1>
        <ul> 
            <li><span>🔹</span><span>Vue.js</span></li>
            <li><span>🔹</span><span>WordPress</span></li>
            <li><span>🔹</span><span>JavaScript</span></li>
            <li><span>🔹</span><span>TypeScript</span></li>
            <li><span>🔹</span><span>HTML</span></li>
            <li><span>🔹</span><span>CSS</span></li>
            <li><span>🔹</span><span>Pinia</span></li>
            <li><span>🔹</span><span>Bootstrap</span></li>
            <li><span>🔹</span><span>Firebase</span></li>
            <li><span>🔹</span><span>Git</span></li>
            <li><span>🔹</span><span>Vite</span></li>
        </ul>
    </aside>
    <article class="about">
        <h1>Experience</h1>
        <p>Web developer with <strong>2 years of commercial experience</strong>, specializing in building dynamic and scalable web applications.</p>
        <p>Strong background in <strong>algorithm development </strong>and practical implementation, ensuring efficient and optimized solutions.</p>
        <p>Leverage <strong>AI-powered tools</strong> like ChatGPT, Deepseek, Canva, and Tabnine to enhance development speed and innovation.</p>
        <p>Successfully delivered <strong>dozens</strong> of applications, meeting and exceeding client expectations.</p>
        <p>Freelance experience on <strong>Fiverr, Upwork, YouDo, and Profi</strong>, working with clients worldwide.</p>
        <div class="para">
            <h1>I offer you:</h1>
        <ol>
                <li>✅ Expertise in <strong>Vue.js & JavaScript </strong>– Crafting complex and high-performance web applications.</li>
                <!-- <li>✅ Custom <strong>WordPress</strong> Solutions – Tailored themes, plugins, and functionality to fit your unique needs.</li> -->
                <li>✅ <strong>On-Time Delivery </strong>– Effective time management to ensure smooth project execution and timely results.</li>
        </ol>
    </div>
        <p>Let me bring your ideas to life with clean, efficient, and scalable code! 🚀</p>
    </article>
</main>
    
  </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* General Styles */
.experience-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

/* Main Layout */
.box {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Inter, sans-serif;
}

/* Web Stack Section */
.webstack {
  background: rgb(243, 168, 66);;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.webstack h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.webstack ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  list-style: none;
  padding: 0;
}

.webstack li {
  background: #eaeaea;
  padding: 8px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
}
.webstack li:hover{
    background-color: #b9b9b9;
}

/* Experience Section */
.about {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.about p {
  font-size: 1rem;
  
  color: #555;
}

.about strong {
  font-weight: bold;
  line-height: 1,6;
  color: #333;
}

/* Offerings Section */
.para {
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.para h2 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.para ul {
  list-style: none;
  padding: 0;
  
}

.para li {
  font-size: 1rem;
  margin-bottom: 5px;
  text-align: start;
}

/* Call to Action */
.cta {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}

/* Responsive Design */
@media (min-width: 768px) {
  .box {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
  }
  .experience-container:not(:first-child) {
    flex: 1 1 300px; /* Grow, shrink, and start at 300px width */
    max-width: 100%;
    }
}

</style>