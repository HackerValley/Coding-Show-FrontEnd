import Vue from 'vue'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    sitename: 'Coding-Show'
  },
  computed: {
    ViewComponent () {
      return require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
