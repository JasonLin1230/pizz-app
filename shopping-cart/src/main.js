import Vue from 'vue'
import VueRouter from 'vue-router'
import ConfigRouter from './router'
import App from './App.vue'
// import './style/order.css'
Vue.config.devtools = true

Vue.use(VueRouter)

// 创建vue-router实例
var router = new VueRouter()
//配置路由
ConfigRouter(router)

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
