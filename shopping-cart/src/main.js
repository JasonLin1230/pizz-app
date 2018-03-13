import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Cart from './components/Cart.vue'
import App from './App.vue'
// import './style/order.css'
Vue.config.devtools = true

Vue.use(VueRouter)

const routers = [
  { path: "*", redirect: "/" },
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/Cart', component: Cart }
];

// 创建vue-router实例
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routers,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

//防止出现404
// router.beforeEach((to, from, next) => {
//   if (to.matched.length ===0) {
//     from.name ? next({ name:from.name}) : next('/');
//   } else {
//     next();
//   }
// });

//启动APP
export const app = new Vue(
  Vue.util.extend({
    router, App
  }, App)
).$mount("#root")
