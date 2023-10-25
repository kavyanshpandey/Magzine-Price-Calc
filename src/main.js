import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter  from 'vue-router';
import HomePage from './components/HomePage'

Vue.config.productionTip = false

// Vue.use(VueRouter );
Vue.use(ElementUI);
Vue.use(VueRouter)

const routes =[
  {
    path:'/', component: HomePage
  }
];

const router = new VueRouter ({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// Vue.js is a progressive JavaScript framework for building user interfaces. It allows developers to create interactive and dynamic web applications with ease. Vue is known for its simplicity and flexibility, making it a popular choice for frontend development.
