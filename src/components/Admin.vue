<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <new-app-pizza></new-app-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItem" :key="item.id">
                    <tr>
                        <td>{{item.name}}</td>
                        <td><button @click="deleteMenu(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NewPizza from "./admin/NewPizza";
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

    data(){
        return{
            getMenuItem:[]
        }
    },
    components:{
        "new-app-pizza":NewPizza
    },
    created(){
        fetch("https://wd1690947960ggenrc.wilddogio.com/menu.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data);
                let menuArr=[];
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const element = data[key];//key为唯一标识,data[key]为对应的对象
                        data[key].id=key;
                        menuArr.push(element);
                    }
                    this.getMenuItem=menuArr;
                }
            })

        // this.http.get("menu.json").then(data => {
        //     let menuArr=[];
        //     for (const key in data) {
        //         if (data.hasOwnProperty(key)) {
        //             const element = data[key];//key为唯一标识,data[key]为对应的对象
        //             data[key].id=key;
        //             menuArr.push(element);
        //         }
        //         this.getMenuItem=menuArr;
        //     }
        // })
    },
    methods:{
        deleteMenu(item){
            fetch("https://wd1690947960ggenrc.wilddogio.com/menu/"+item.id+"/.json",{
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => this.$router.push({name:'menuLink'}))
            .catch(err => console.log(err))
        }
    }
}
</script>
