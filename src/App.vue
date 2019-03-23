<template>
  <div id="app">
    <div class="container">
      <app-header>

      </app-header>

      <router-view>
        
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components:{
    appHeader:Header
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
