<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 content">
          <h1 class="title"><img src='../assets/tmdb-logo.svg'></h1>
          <router-link class='about-link' to='/about'>About</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .footer{
    background-color:#0d253f;
    opacity: 0.8;
    padding: 20px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .footer .title{
    width: 10%;
  }
  .footer .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer .about-link{
    color: white;
  }
  .footer .about-link:hover{
    text-decoration: none;
  }
</style>