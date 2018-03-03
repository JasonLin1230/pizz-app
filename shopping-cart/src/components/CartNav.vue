<script>
  export default {
    name: 'Nav',

  }
</script>
<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#" router-link="{ path: '/' }">ShoppingCart</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/Home" class="nav-item">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" to="/Cart" class="nav-item">
            <a class="nav-link">Cart</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
  .router-link-active{
    background-color: #e7e7e7;
  }
</style>
