import Vue from 'vue';
import Vuex from 'vuex';
import homePage from './homePage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    homePage,
  },
});
