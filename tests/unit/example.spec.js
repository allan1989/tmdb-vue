import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Search from '@/pageElements/Search.vue';
import $routes from '@/routing/index.js';

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();


describe('Correct routes changes', () => {
  test('Search component call Search page component if searchTerm is provided', async () => {
    const wrapper = mount(Search, {
      propsData: {
        search: 'shrek'
      }, 
      localVue,
      router,
      mocks: {
        $routes
      }
      
      
    })

    await wrapper.find('.search-input').trigger('click');
    console.log(wrapper.vm.$routes[1].path)
  })

})

