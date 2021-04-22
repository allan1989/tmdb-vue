<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Movie Details</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie-Details',
  mounted(){
    console.log(this.$route.params.movieId)
  }
}
</script>

<style scoped>

</style>