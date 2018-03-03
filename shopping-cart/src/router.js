import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Cart from './components/Cart.vue'
export default function (router) {
  var router = new VueRouter({
    routes: [
      { path: "*", redirect: "/" },
      { path: '/', component: Home },
      { path: '/Home', component: Home },
      { path: '/Cart', component: Cart }
    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  })
}
