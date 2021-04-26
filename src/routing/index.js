import Discover from './views/Discover.vue'
import Search from './views/Search.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import MovieDetails from './views/MovieDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Discover
  },
  {
    path: '/search/:searchTerm',
    name: 'Search',
    component: Search
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetails',
    component: MovieDetails,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

export default routes;