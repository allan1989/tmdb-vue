<template>
  <div id="app">
    <Header/>
    <Search/>
    <router-view/>  
    <Footer/>
  </div>
</template>

<script>
import Header from './pageElements/Header.vue'
import Search from './pageElements/Search.vue'
import Footer from './pageElements/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Footer
  }
}
</script>

<style>
  body{
    background-color: #f7f3e9;
  }
</style>
