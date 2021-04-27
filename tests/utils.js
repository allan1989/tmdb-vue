import axios from 'axios';
import apiKey from '@/store/api.js';

export class apiCalls{
  static fetchSingleMovie(id){
    return axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
  }
  static getTrendingMovies(){
    return axios  
            .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
  }
  static fetchRecommendations(id){
    return axios
            .get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
  }
  static searchMovie(searchTerm){
    return axios  
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
  }
}