<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <Header />
  <main>
    <router-view />   
  </main>
  <Footer />
</template>

<style scoped>
  main{margin-top:15vh;}

</style>
