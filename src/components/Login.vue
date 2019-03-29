<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/login.png" alt="" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="eamil" v-model="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" v-model="password" class="form-control">
                        </div>
                        <button class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        onSubmit (){
            axios.get('/users.json')
                 .then(res =>{
                     const data=res.data;
                     const users=[];
                     for (const key in data) {
                         if (data.hasOwnProperty(key)) {
                             const element = data[key];
                             users.push(element);
                         }
                     }
                    //  实现过滤
                    let result=users.filter((user) =>{
                        return (user.email === this.email && user.password === this.password)
                    })

                    // 判断是否成功匹配
                    if(result != null && result.length > 0){
                        this.$store.dispatch("setUser",result[0].email)//使用commit也可以
                        this.$router.push({name:'homeLink'})
                    }else{
                        alert("账号或密码错误！");
                        this.$store.dispatch("setUser",null)
                    }
                 })
        }
    },
    //beforeRouteEnter(to,from,next)  {//导航守卫
    beforeRouteEnter: (to,from,next)  => {
        // this无法获取到
        next(vm => {
            vm.$store.dispatch("setUser",null)
        })
    }
}
</script>
