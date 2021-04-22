<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="page-title">Search results for "{{this.$route.params.searchTerm}}":</h2>
      </div>
      <div class="col-12">
        <section class="discover-section">
          <div v-if='isLoading'>
            <img src='../../assets/loading.gif' alt="loading" style="width:10%"/>
          </div>
          <div v-else-if='hasError.status'>
            <p>{{ hasError.message }}</p>
          </div>
          <div v-else class="movies-container">
            <movie-card v-for='movie in getSearchResults' :movie='movie' :key='movie.id'></movie-card>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex';
import  movieCard  from '../../components/movieCard';

export default {
  name: 'Search',
  components: {
    movieCard
  },
  methods: {
    ...mapActions(['searchMovie'])
  },
  mounted(){
    this.searchMovie(this.$route.params.searchTerm)
  },
  computed: {
    ...mapGetters(['isLoading', 'getSearchResults', 'hasError'])
  },
  watch: {
    '$route' (to, from){
      if(to.params.searchTerm !== from.params.searchTerm){
        this.searchMovie(to.params.searchTerm)
      }
    }
  }
}
</script>
<style scoped>
  .page-title{
    margin-bottom: 40px;
  }
</style>