<template>
<div class="container">
    <h2>主页</h2>
    <button @click="goToMenu" class="btn btn-success">立即下单</button>
</div>
</template>

<script>
export default {
    methods:{
        goToMenu(){
            // 返回上一级
            // this.$router.go(-1);

            // this.$router.replace('/menu')
            // this.$router.replace({name:'menuLink'})
            
            this.$router.push({name:'menuLink'})
        }
    }
}
</script>

