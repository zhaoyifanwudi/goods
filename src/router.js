import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Login from './pages/login'
import Detail from './pages/detail'
import Seek from './pages/seek'
import Donate from './pages/donate'
import Affirm from './pages/affirm'
import OrderConfirm from './pages/orderConfirm'
import Cart from './pages/cart'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index
                },{
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail
                },{
                    path:'/seek',
                    name:'seek',
                    component:Seek
                },{
                    path:'/donate',
                    name:'donate',
                    component:Donate
                },{
                    path:'/affirm',
                    name:'affirm',
                    component:Affirm
                },{
                    path:'/confirm',
                    name:'confirm',
                    component:OrderConfirm
                },{
                    path:'/cart',
                    name:'cart',
                    component:Cart
                },
            ]
        },{
            path:'/login',
            name:'login',
            component:Login
        }
    ]
});