import Vue from 'vue';
import Vuex from 'vuex';
import keyboard from './modules/keyboards';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    keyboard
  }
})