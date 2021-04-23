import axios from 'axios';
import apiKey from '../api';

const state = {
  movies: [],
  isLoading: true,
  hasError: {
    status: false,
    message: ''
  },
  searchResults: [],
  movie: {}
};

const getters = {
  isLoading: (state) => state.isLoading,
  trendingMovies: (state) => state.movies,
  hasError: (state) => state.hasError,
  getSearchResults: (state) => state.searchResults,
  getSingleMovie: (state) => state.movie
};

const actions = {
  async getTrendingMovies({commit}){
    try {
      let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
      commit('setLoading', false)
      commit('setMovies', response.data.results)
    }catch(err){
      commit('setLoading', false)
      commit('setError', {
        status: true,
        message: err
      })
      console.warn(err)
    } 
  },
   async searchMovie({commit}, searchTerm){
    try{
      let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
      commit('setLoading', false)
      commit('setSearchResult', response.data.results)
    }catch(err){
      commit('setLoading', false)
      commit('setError', {
        status: true,
        message: err
      })
      console.warn(err)
    }
  },
  async fetchSingleMovie({commit}, id){
    try{
      let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
      commit('setLoading', false)
      commit('setSingleMovie', response.data)
    }catch(err){
      commit('setLoading', false)
      commit('setError', {
        status: true,
        message: err
      })
      console.warn(err)
    }
  }
};

const mutations = {
  setMovies: (state, payload) => state.movies = payload,
  setLoading: (state, payload) => state.isLoading = payload,
  setError: (state, payload) => state.hasError = payload,
  setSearchResult: (state, payload) => state.searchResults = payload,
  setSingleMovie: (state, payload) => state.movie = payload
};

export default {
  state,
  getters,
  actions,
  mutations
}