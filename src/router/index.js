import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
});
