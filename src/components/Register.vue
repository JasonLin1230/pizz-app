<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/register.png" alt="" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="eamil" v-model="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" v-model="password" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input type="password" v-model="confirmPassword" class="form-control">
                        </div>
                        <button class="btn btn-block btn-success">注册</button>
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
            confirmPassword:''
        }
    },
    methods:{
        onSubmit (){
            if(this.password === this.confirmPassword){
                const formData={
                    email:this.email,
                    password:this.password
                }
                axios.post('/users.json',formData)
                     .then(res => {
                         this.$router.push({name:'loginLink'});
                     })
            }else{
                alert("两次密码不一致！")
            }
        }
    }
}
</script>
