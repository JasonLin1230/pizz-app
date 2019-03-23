import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'
import About from './components/about/About'
import Register from './components/Register'
import App from './App.vue'

Vue.use(VueRouter)

const routes=[
  {path:'/',component:Home},
  {path:'/home',component:Home},
  {path:'/admin',component:Admin},
  {path:'/menu',component:Menu},
  {path:'/login',component:Login},
  {path:'/about',component:About},
  {path:'/register',component:Register},
  {path:'*',redirect:'/'}
]

const router=new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
