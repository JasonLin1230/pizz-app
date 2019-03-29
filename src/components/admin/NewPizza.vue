<template>
    <form action="">
        <h3 class="text-muted my-5">添加新的Pizza</h3>
        <div class="form-group row">
            <label for="type" class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label for="desc" class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea row="10" class="form-control" v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p><strong>选项一</strong></p>
        <div class="form-group row">
            <label for="type" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label for="type" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>选项二</strong></p>
        <div class="form-group row">
            <label for="type" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label for="type" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="form-group row">
            <button type="button" @click="addMenuItem" class="btn btn-block btn-success">添加</button>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){
            let data = {
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }
                ]
            }
            // axios vue-resourse es6 fetch
            // fetch("https://wd1690947960ggenrc.wilddogio.com/menu.json",{
            //   method:"POST",
            //   headers:{
            //     "Content-type":'application/json'
            //   },
            //   body:JSON.stringify(data)
            // })
            //   .then(res => res.json())
            //   .then(data => this.$router.push({name:"menuLink"}))
            //   .catch(err => console.log(err))
             
             this.http.post("menu.json",data).then(data => {
                 this.$router.push({name:'menuLink'})
             })
        }
    }
}
</script>

