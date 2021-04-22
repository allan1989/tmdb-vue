<template>
  <div class="movie-card">
    <img :src=" movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : require('../assets/notfound.png') " 
         :alt='movie.title'
         class="poster"/>
    <h2 class="title">
      <router-link :to=" '/movie/' + movie.id ">{{ movie.title }}</router-link>
    </h2>
    <p class="date"> {{ movie.release_date | year }}</p>
  </div>
</template>
<script>
export default {
  name: 'movieCard',
  props: ['movie'],
}
</script>
<style scoped>
  .movie-card{
    width: 250px;
    margin-bottom: 20px;
  }
  .movie-card .poster{
    max-width: 100%;
    min-height: 375px;
    max-height: 375px;
  }
  .movie-card .title{
    font-size: 20px;
    padding: 5px 0;
    margin-bottom: 0;
  }
  .movie-card .date{
    margin-bottom: 0;
    font-size: 14px;
  }
</style>