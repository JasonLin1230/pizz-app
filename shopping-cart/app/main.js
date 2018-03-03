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

// 滚动到页面顶部
router.beforeEach(function () {
    window.scrollTo(0, 0)
})

//全路径匹配，防止出现404
router.redirect({
    '*': '/'
})
//启动APP
router.start(App, '#root')