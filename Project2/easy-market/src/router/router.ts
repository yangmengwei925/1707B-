import React from 'react'
import {IRouterProp} from '../utils/interface'


// 引入一级路由
// import LoginPage from '../views/LoginPage'
// import FavorPage from '../views/FavorPage'
// import MainPage from '../views/MainPage'
// import AddressPage from '../views/AddressPage'
// import GoodsDetailPage from '../views/GoodsDetailPage'
// import TopicDetailPage from '../views/TopicDetailPage'
// import BrandDetailPage from '../views/BrandDetailPage'

const LoginPage = React.lazy(() => import('../views/LoginPage'));
const FavorPage = React.lazy(() => import('../views/FavorPage'));
const MainPage = React.lazy(() => import('../views/MainPage'));
const AddressPage = React.lazy(() => import('../views/AddressPage'));
const GoodsDetailPage = React.lazy(() => import('../views/GoodsDetailPage'));
const TopicDetailPage = React.lazy(() => import('../views/TopicDetailPage'));
const BrandDetailPage = React.lazy(() => import('../views/BrandDetailPage'));


// 引入二级路由
// import HomePage from '../views/main/HomePage'
// import ClassifyPage from '../views/main/ClassifyPage'
// import CartPage from '../views/main/CartPage'
// import MyPage from '../views/main/MyPage'
// import TopicPage from '../views/main/TopicPage'

const HomePage = React.lazy(() => import('../views/main/HomePage'));
const ClassifyPage = React.lazy(() => import('../views/main/ClassifyPage'));
const CartPage = React.lazy(() => import('../views/main/CartPage'));
const MyPage = React.lazy(() => import('../views/main/MyPage'));
const TopicPage = React.lazy(() => import('../views/main/TopicPage'));



let config = {
    routes: [{
        path: '/login',
        component: LoginPage
    }, {
        path: '/favor',
        component: FavorPage
    }, {
        path: '/address',
        component: AddressPage
    }, {
        path: '/topicDetail/:id',
        component: TopicDetailPage
    }, {
        path: '/brandDetail/:id',
        component: BrandDetailPage
    }, {
        path: '/goodsDetail/:id',
        component: GoodsDetailPage
    }, {
        path: '/main',
        component: MainPage,
        children: [{
            path: '/main/home',
            component: HomePage
        },{
            path: '/main/topic',
            component: TopicPage
        },{
            path: '/main/classify',
            component: ClassifyPage
        },{
            path: '/main/cart',
            component: CartPage
        },{
            path: '/main/my',
            component: MyPage
        }]
    },{
        path: '*',
        redirect: '/main/home'
    }]
}

export default config as IRouterProp