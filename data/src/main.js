import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Mint from '../node_modules/mint-ui/lib/style.css';

import axios from 'axios';
Vue.prototype.$http = axios ;

Vue.use(Mint);
Vue.use(VueRouter);


import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import Vuex from 'vuex'
Vue.use(Vuex)
import store from './assets/js/data.js'


import { CellSwipe } from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe);

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);


import './assets/js/swiper.min.js'
//import '../data/js/swiper.min.js'

import router from './assets/js/router.js'


new Vue({
  el: '#app',
  render: h => h(App),
  router,
	store
})
