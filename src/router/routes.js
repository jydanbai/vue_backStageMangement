
let  Login = () => import('../pages/Login/Login.vue')
let  Home = () => import('../pages/Home/Home.vue')
let  Products = () => import('../pages/Products/Products.vue')
let  Orders = () => import('../pages/Orders/Orders.vue')
let  Auth = () => import('../pages/Auth/Auth.vue')

// let AddProducts = () => import('../pages/Products/AddProducts/AddProducts.vue')
// let ProductsList = () => import('../pages/Products/ProductsList/ProductsList.vue')
// let ProductsCategory = () => import('../pages/Products/ProductsCategory/ProductsCategory.vue')

let OrdersList = () => import('../pages/Orders/OrdersList/OrdersList.vue')
let OrdersSet = () => import('../pages/Orders/OrdersSet/OrdersSet.vue')

let UserManage = () => import('../pages/Auth/UserManage/UserManage.vue')
let RoleManage = () => import('../pages/Auth/RoleManage/RoleManage.vue')

import Add from '../pages/Products/Add/Add'
import List from '../pages/Products/List/List'
import Category from '../pages/Products/Category/Category'

// import OrdersList from '../pages/Orders/OrdersList/OrdersList'
// import OrdersSet from '../pages/Orders/OrdersSet/OrdersSet'

// import UserManage from "../pages/Auth/UserManage/UserManage"
// import RoleManage from "../pages/Auth/RoleManage/RoleManage"



// 专门放置路由信息
export default [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home,
    meta:{
      isShowCategory:true
    },
    
  },
  {
    path:'/products',
    component:Products,
    meta:{
      isShowCategory:true
    },
    children: [
      {
        path: '/add',
        component: Add,
        meta:{
          isShowCategory:true
        },
      },
      {
        path: '/list',
        component: List,
        meta:{
          isShowCategory:true
        },
      },
      {
        path: '/category',
        component: Category,
        meta:{
          isShowCategory:true
        },
      },
      {
        path:'/',
        redirect:'/add',
        meta:{
          isShowCategory:true
        },
      }
    ]
  },
  {
    path:'/orders',
    component:Orders,
    meta:{
      isShowCategory:true
    },
    children: [
      {
        path: '/orderslist',
        component: OrdersList,
        meta:{
          isShowCategory:true
        },
      },
      {
        path: '/ordersset',
        component: OrdersSet,
        meta:{
          isShowCategory:true
        },
      },
    ]
  },
  {
    path:'/auth',
    component:Auth,
    meta:{
      isShowCategory:true
    },
    children: [
      {
        path: '/usermanage',
        component: UserManage,
        meta:{
          isShowCategory:true
        },
      },
      {
        path: '/rolemanage',
        component: RoleManage,
        meta:{
          isShowCategory:true
        },
      },
    ]
  },
  {
    path:'/',
    redirect:'/home'
  },
]


