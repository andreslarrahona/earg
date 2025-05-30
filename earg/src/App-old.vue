<script setup>
import Main from '@/components/Main.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <Header />
  <Main>
    <router-view />   
  </Main>
  <Footer />
</template>

<style scoped>

</style>
