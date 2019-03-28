import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL="https://wd1690947960ggenrc.wilddogio.com/";

const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    // return { x: 0, y: 100 }
    // return{selector:'.btn'}
    if(savedPosition){
      return savedPosition
    }else{
      return{x:0,y:0}
    }
  }
})

// router.beforeEach((to,from,next)=>{
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("您还没有登录，请先登录！");
//     next('/login');
//   }
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
