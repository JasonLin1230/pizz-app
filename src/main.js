import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'
import About from './components/about/About'
import Register from './components/Register'
import App from './App.vue'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import Email from './components/about/contact/Email'


Vue.use(VueRouter)

const routes=[
  {path:'/',name:'homeLink',component:Home},
  {path:'/home',name:'homeLink',component:Home},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/about',name:'aboutLink',component:About,redirect:'/about/orderingGuide',children:[
    {path:'/about/contact',name:'contactLink',component:Contact,redirect:'/about/contact/phone',children:[
      {path:'/about/contact/phone',name:'phoneLink',component:Phone},
      {path:'/about/contact/email',name:'emailLink',component:Email}
    ]},
    {path:'/about/delivery',name:'deliveryLink',component:Delivery},
    {path:'/about/history',name:'historyLink',component:History},
    {path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
  ]},
  {path:'/register',name:'registerLink',component:Register},
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
