<template>
  <router-link 
    class='movie-card-link-wrapper' 
    :to=" {
      name: 'MovieDetails',
      params: {
        movieId: movie.id, 
        fromRecommendationsSection: fromRecommendationsSection
      },
     }">
    <div class="movie-card">
      <img :src=" movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : require('../assets/notfound.png') " 
          :alt='movie.title'
          class="poster"/>
      <h2 class="title">{{ movie.title }}</h2>
      <p class="date"> {{ movie.release_date | year }}</p>
    </div>
  </router-link>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'movieCard',
  props: {
    'movie': {
      type: Object,
      required: true
    }, 
    'fromRecommendationsSection': {
      type: Boolean,
    }
  },
  methods: {
    ...mapActions(['fetchSingleMovie', 'fetchRecommendations'])
  },
  watch: {
    '$route' (to, from){
      if(to.params.movieId !== from.params.movieId){
        this.fetchSingleMovie(to.params.movieId);
        this.fetchRecommendations(to.params.movieId);
      }
    }
  }
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
  .movie-card-link-wrapper{
    color: black;
    text-decoration: none;
  }
  .movie-card-link-wrapper:hover .title{
    text-decoration: underline;
  }
</style>