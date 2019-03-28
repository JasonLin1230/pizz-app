<template>
<div class="container">
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝pizza！</h1>
                <h2>这里有你喜欢的美味pizza！</h2>
                <button @click="goToMenu" class="btn btn-success">立即下单</button>
            </div>
        </div>
    </div>
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

<style>
#home{
    background: url("../assets/pizza.jpg");
    height: 85vh;
    padding: 10%;
}
h1,h2{
    margin: 6%;
}
.background{
    opacity: 0.8;
    background: #eee;
    max-width: 70vw;
    padding: 20px 0;
}
</style>