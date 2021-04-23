import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routing/index.js';
import store from './store/index'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.filter('year', function(value) {
  if(value) return value.split('-')[0]
});

Vue.filter('genres', function(value) {
  return value.map(obj => obj.name).join(', ')
});

Vue.filter('full_release_date', function(value){
  let monthsArray = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
  let yearIndex = value.split('-')[0];
  let monthIndex = value.split('-')[1];
  let dayIndex = value.split('-')[2]
  return dayIndex + ' ' + monthsArray[+monthIndex] + ' ' +  yearIndex
});

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
