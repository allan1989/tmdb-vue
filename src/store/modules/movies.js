import axios from 'axios';
import apiKey from '../api';

// https://api.themoviedb.org/3/movie/550?api_key=f075fead38b96ad58b21a510c880bd54

const state = {
  movies: [],
  isLoading: true
};

const getters = {
  isLoading: (state) => state.isLoading,
  trendingMovies: (state) => state.movies
};

const actions = {
  async getTrendingMovies({commit}){
    try {
      let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
      commit('setLoading', false)
      commit('setMovies', response.data.results)
    }catch(err){
      console.log('error', err)
    } 
  }
};

const mutations = {
  setMovies: (state, payload) => (state.movies = payload),
  setLoading: (state, payload) => (state.isLoading = payload)
};

export default {
  state,
  getters,
  actions,
  mutations
}