import Vue from 'vue'
import App from './modi.vue'

/* eslint-disable no-new */
new Vue({
  el: '#modiProj',
  data: {
    targetUrl: window.location.hash
  },
  template: '<app :prop1="targetUrl"></app>',
  components: { App }
})
