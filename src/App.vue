<template>
  <div id="app">
    <Header/>
    <Search/>
    <router-view/>  
  </div>
</template>

<script>
import Header from './pageElements/Header.vue'
import Search from './pageElements/Search.vue'


export default {
  name: 'App',
  components: {
    Header,
    Search
  }
}
</script>

<style>

</style>
