export default function (router) {
    var router = new VueRouter({
        routes: [
            { path: '/', component: Index },
            { path: '/Home', component: Index },
            { path: '/Cart', component: Cart }
        ]
    })
}