import { createRouter, createWebHistory } from 'vue-router';
import home from "./components/pages/Home.vue";
import signin from "./components/pages/Signin.vue";
import signup from "./components/pages/Signup.vue";
import video from "./components/pages/Video.vue";

import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/',  component: home},
      { path: '/signin', component: signin },
      { path: '/signup', component: signup },
      { path: '/videos', component: video, meta: { requiresAuth: true } },]

    });
        
    router.beforeEach(function(to, _, next) {
      if (to.meta.requiresAuth  && !store.getters.isAuthenticated) {
        next('/signin');
      } else if (to.meta.requiresAuth && store.getters.isAuthenticated) {
        next();
      } else {
        next();
      }
    });

  


export default router;