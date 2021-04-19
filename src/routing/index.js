import Discover from './views/Discover.vue'
import Search from './views/Search.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Discover
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
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