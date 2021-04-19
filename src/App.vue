<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './pageElements/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
