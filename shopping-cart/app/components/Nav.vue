// Nav.vue
<script>
  export default {
    name: 'nav',
    vuex: {
      getters: {
        current: ({orderList}) => orderList.activeOrder
      }
    }
  }
</script>
<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#" v-link="{ path: '/' }">ShoppingCart</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-link="{ path: '/Home',activeClass:'active'}"><a href="#!">Home <span class="sr-only">(current)</span></a></li>
          <li v-link="{ path: '/Cart',activeClass:'active'}"><a href="#!">Cart </a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>