import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'


export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
