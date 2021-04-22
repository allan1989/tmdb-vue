<template>
  <form class="container search-container" @submit.prevent="searchMovie">
    <div class="row">
      <div class="col-10">
        <input class='search-input' 
               type='search' 
               placeholder="Search for a movie..." 
               v-model.trim='search'>
      </div>
      <div class="col-2">
        <input class="search-submit" type='submit' value='Go!'>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Search',
  data: function(){
    return {
      search: ''
    }
  },
  methods: {
    searchMovie(){
      this.$router.push({
        name: 'Search',
        params: {
          searchTerm: this.search
        }
      })
    }
  }
}
</script>
<style scoped>
  .search-input{
    font-size: 60px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #EEE;
    color: #6d7074;
    padding: 20px 0;
  }
  .search-input:focus{
    outline: none;
  }
  .search-container{
    margin-top: 10px;
    margin-bottom: 40px;
  }
  .search-submit{
    font-size: 40px;
    border: none;
    background-color: #EEE;
    transition: background-color .6s ease;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .search-submit:hover{
    background-color: rgb(218, 218, 218);
  }
</style>