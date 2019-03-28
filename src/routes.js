import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'
import About from './components/about/About'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import Email from './components/about/contact/Email'


export const routes=[
    {path:'/home',name:'homeLink',components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'history':History,
        'delivery':Delivery
    }},
    {path:'/admin',name:'adminLink',component:Admin,beforeEnter:((to,from,next)=>{
    //   组件内路由
    //   alert("您不是管理员，无权访问当前页面！");
      next();
    })},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/about',name:'aboutLink',component:About,redirect:'/about/orderingGuide',children:[
      {path:'/about/contact',name:'contactLink',component:Contact,redirect:'/about/contact/phone',children:[
        {path:'/about/contact/phone',name:'phoneLink',component:Phone},
        {path:'/about/contact/email',name:'emailLink',component:Email}
      ]},
      {path:'/about/delivery',name:'deliveryLink',component:Delivery},
      {path:'/about/history',name:'historyLink',component:History},
      {path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
    ]},
    {path:'/register',name:'registerLink',component:Register},
    {path:'*',redirect:'/home'}
  ]