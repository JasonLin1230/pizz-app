<template>
    <div class="row">
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                    <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                    <td>{{option.size}}</td>
                    <td>{{option.price}}</td>
                    <td>
                        <button 
                        @click="addToBasket(item,option)"
                        class="btn btn-sm btn-outline-success">+</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length>0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>品种</th>
                            <th>数量</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in baskets" :key="item.price">
                        <tr>
                            <td>{{item.name}} {{item.size}}寸</td>
                            <td>
                                <button type="button" @click="decreaseQuantity(item)" class="btn btn-light btn-sm">-</button>
                                <span>{{item.quantity}}</span>
                                <button type="button" @click="increaseQuantity(item)" class="btn btn-light btn-sm">+</button>
                            </td>
                            <td>{{item.quantity*item.price}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价：{{total +"RMB"}}</p>
                <button class="btn btn-block btn-success">提交</button>
            </div>
            <div v-else>{{basketEmpty}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            baskets:[],
            basketEmpty:'购物车中还没有商品哦',
            getMenuItems:{}
        }
    },
    computed:{
        total(){
            let totalCost=0;
            for(let index in this.baskets){
                let indivdualItem=this.baskets[index];
                totalCost += indivdualItem.price * indivdualItem.quantity;
            }
            return totalCost;
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            // 使用fetch
            // fetch("https://wd1690947960ggenrc.wilddogio.com/menu.json")
            //     .then(res => {
            //         return res.json()
            //     })
            //     .then(data => {
            //         this.getMenuItems = data
            //         console.log(this.getMenuItems)
            //     })

            // 使用axios
            // axios.get("menu.json").then(res => {
            //     this.getMenuItems = res.data
            // })

            // 使用Vue原型
            this.http.get("menu.json").then(res => {
                this.getMenuItems = res.data
            })
        },
        addToBasket(item,option){
            let basket={
                name:item.name,
                size:option.size,
                price:option.price,
                quantity:1
            };
            if(this.baskets.length>0){
                // 过滤!!!
                let result = this.baskets.filter((basket) => {
                    return (basket.name === item.name && basket.price === option.price)
                })
                if(result != null && result.length>0){
                    result[0].quantity++
                }else{
                    this.baskets.push(basket)
                }
            }else{
                this.baskets.push(basket)
            }
        },
        decreaseQuantity(item){
            item.quantity--;
            if(item.quantity<1){
                this.removeFromBaskets(item)
            }
        },
        increaseQuantity(item){
            item.quantity++
        },
        removeFromBaskets(item){
            this.baskets.splice(this.baskets.indexOf(item),1)
        }
    }
}

// const testData={
//         1: {
//             'name': '榴莲pizza',
//             'description': '这是喜欢吃榴莲朋友的最佳选择',
//             'options': [{
//                 'size': 9,
//                 'price': 38
//             }, {
//                 'size': 12,
//                 'price': 48
//             }]
//         },
//         2: {
//             'name': '芝士pizza',
//             'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
//             'options': [{
//                 'size': 9,
//                 'price': 38
//             }, {
//                 'size': 12,
//                 'price': 48
//             }]
//         },
//         3: {
//             'name': '夏威夷pizza',
//             'description': '众多人的默认选择',
//             'options': [{
//                 'size': 9,
//                 'price': 36
//             }, {
//                 'size': 12,
//                 'price': 46
//             }]
//         }
//     }
</script>
