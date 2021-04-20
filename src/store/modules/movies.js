import axios from 'axios';
import apiKey from '../api';

// https://api.themoviedb.org/3/movie/550?api_key=f075fead38b96ad58b21a510c880bd54

const state = {
  movies: [],
  isLoading: true,
  hasError: {
    status: false,
    message: ''
  }
};

const getters = {
  isLoading: (state) => state.isLoading,
  trendingMovies: (state) => state.movies,
  hasError: (state) => state.hasError
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
  }
};

const mutations = {
  setMovies: (state, payload) => (state.movies = payload),
  setLoading: (state, payload) => (state.isLoading = payload),
  setError: (state, payload) => (state.hasError = payload)
};

export default {
  state,
  getters,
  actions,
  mutations
}