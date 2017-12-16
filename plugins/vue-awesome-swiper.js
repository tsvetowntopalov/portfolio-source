import Vue from 'vue';
if (process.browser) {
  var VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
  Vue.use(VueAwesomeSwiper);
}