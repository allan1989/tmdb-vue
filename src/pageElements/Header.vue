<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="title">
            <router-link to='/'><img src='../assets/tmdb-logo.svg'></router-link>
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .header{
    background-color: #0d253f;
    padding: 20px 0;
  }
  .header .title{
    width: 30%;
  }
</style>