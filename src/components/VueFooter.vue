<template>
  <section class="footer">
    <div>
        <p>Copyright &#169; {{ date }} All rights reserved</p>
    </div>
  </section>
</template>

<script setup>

const date = new Date().getFullYear()

</script>

<style scoped>
.footer{
    background: rgb(43, 43, 43);
    color: white;
    height: 20vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

</style>