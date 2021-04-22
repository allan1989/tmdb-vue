<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="title">Discover</h1>
        <p>Here are the movies trending this week</p>
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
            <movie-card v-for='movie in trendingMovies' :movie='movie' :key='movie.id'></movie-card>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import  movieCard  from '../../components/movieCard';

export default {
  name: 'Discover',
  components: {
    movieCard
  },
  methods: {
    ...mapActions(['getTrendingMovies'])
  },
  computed: {
    ...mapGetters(['isLoading', 'trendingMovies', 'hasError'])
  },
  mounted(){
    this.getTrendingMovies();
  }
}
</script>
<style>
  .movies-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>