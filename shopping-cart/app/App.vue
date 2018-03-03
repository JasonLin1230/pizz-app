<script>
  import Nav from './components/Nav.vue'
  import store from './vuex/store'

  export default {
    name: 'App',
    // 注入store到根组件
    store,
    data() {
      return {}
    },

    components: {
      //子组件order-nav
      'cart-nav': Nav
    }
  }
</script>
<template>
  <div id="app">
    <cart-nav></cart-nav>
    <router-view></router-view>
  </div>
</template>
