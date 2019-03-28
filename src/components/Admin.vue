<template>
    <h2>管理</h2>
</template>
<script>
export default {
    // data(){
    //     return{
    //         name:'Jason'
    //     }
    // },
    // beforeRouteEnter:((to,from,next)=>{
        // alert("hello "+this.name);
        // 会是hello undefined，因为组件渲染之前，无法获取到this实例

        // 通过vm异步回调来获取
    //     next(vm=>{
    //         alert("hello " + vm.name);
    //     })
    // }),
    // beforeRouteLeave:((to,from,next)=>{
    //     if(confirm("确定要离开当前页面嘛？") == true){
    //         next();
    //     }else{
    //         next(false);
    //     }
    // })
}
</script>
