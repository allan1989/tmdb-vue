<template>
  <div class="container">
    <div class="row recommendations-section">
      <div class="col-12">
        <h2>Recommendations:</h2>
      </div>
      <div class="col-12">
        <section>
          <div v-if='isLoading'>
            <img src='../assets/loading.gif' alt="loading" style="width:10%"/>
          </div>
          <div v-else-if='hasError.status'>
            <p>{{ hasError.message }}</p>
          </div>
          <div v-else class="movies-container">
            <movie-card 
              v-for='movie in movies' 
              :movie='movie' 
              :key='movie.id'
              :fromRecommendationsSection='true'></movie-card>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import movieCard from './movieCard';
export default {
  name: 'Recommendations',
  props: {
    'isLoading': {
      type: Boolean,
      required: true
    }, 
    'movies': {
      type: Array,
      required: true
    },
    'hasError': {
      type: Object,
      required: true
    }
  },  
  components: {
    movieCard
  }
}
</script>

<style scoped>
  .recommendations-section{
    margin-top: 60px
  }
  .recommendations-section div,
  .recommendations-section h2{
    padding: 0
  }
  .recommendations-section h2{
    margin-bottom: 20px;
  }
</style>