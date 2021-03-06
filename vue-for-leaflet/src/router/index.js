import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = () => import('@/views/index')

export default new Router({
  routes: [{
    path: '/',
    component: Index,
    name: 'index'
  }]
})