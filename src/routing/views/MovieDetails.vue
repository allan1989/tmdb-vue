<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <section class="discover-section">
          <div v-if='isLoading'>
            <img src='../../assets/loading.gif' alt="loading" style="width:10%"/>
          </div>
          <div v-else-if='hasError.status'>
            <p>{{ hasError.message }}</p>
          </div>
          <div v-else class="movie-detail">
            <button 
              v-show='!this.$route.params.fromRecommendationsSection'
              class='go-back-link' 
              @click='goBack'>Back To The Results</button>
            <h2 class="movie-detail-title">{{ getSingleMovie.original_title}} <span class="movie-detail-year">({{ getSingleMovie.release_date | year }})</span></h2>
            <p class="movie-detail-full-release-date">{{ getSingleMovie.release_date | full_release_date }}</p>
            <p class="movie-detail-full-genres">{{ getSingleMovie.genres | genres }}</p>
            <img :src="getSingleMovie.poster_path ? 'https://image.tmdb.org/t/p/original' + getSingleMovie.poster_path : require('../../assets/notfound.png')" 
                 :alt="getSingleMovie.title"
                 class="movie-detail-poster"/>
            <p class="movie-detail-overview">{{ getSingleMovie.overview }}</p>
            <a v-show="getSingleMovie.imdb_id" class='movie-detail-imdb-link' :href=" 'https://www.imdb.com/title/' + getSingleMovie.imdb_id " target='_blank' title='view on IMDB (open in new window)'>
              <img src='../../assets/imdb-logo.svg' alt='IMDB logo'>
            </a>
          </div>
        </section>
      </div>
    </div>
    <Recommendations
      v-show="this.getRecommendations.length > 0" 
      :isLoading='isLoading'
      :hasError="hasError"   
      :movies="this.getRecommendations"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Recommendations from '../../components/recommendations.vue'

export default {
  name: 'Movie-Details',
  components: {
    Recommendations
  },
  mounted(){
    this.fetchSingleMovie(this.$route.params.movieId);
    this.fetchRecommendations(this.$route.params.movieId)
  },
  methods: {
    ...mapActions(['fetchSingleMovie', 'fetchRecommendations']),
    goBack(){
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(['isLoading', 'getSingleMovie', 'hasError', 'getRecommendations'])
  }
}
</script>

<style scoped>
  .movie-detail-title{
    font-size: 50px;
    margin-top: 40px;
  }
  .movie-detail-year{
    font-size: 40px;
  }
  .movie-detail-poster{
    width: 30%;
    margin-bottom: 20px;
  }
  .movie-detail-overview{
    max-width: 1000px;
  }
  .movie-detail-imdb-link{
    display: inline-block;
    transition: transform .6s ease;
  }
  .movie-detail-imdb-link:hover{
    transform: scale(1.1);
  }
  .go-back-link{
    border: none;
    background: transparent;
    text-decoration: underline;
  }
  .go-back-link:hover{
    text-decoration: none;
  }
</style>