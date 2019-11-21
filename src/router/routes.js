
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
      title:'首页',
      isShowCategory:true
    },
    
  },
  {
    path:'/products',
    component:Products,
    meta:{
      title:'商品管理',
      isShowCategory:true
    },
    children: [
      {
        path: '/add',
        component: Add,
        meta:{
          title:'添加商品',
          isShowCategory:true
        },
      },
      {
        path: '/list',
        component: List,
        meta:{
          title:'商品列表',
          isShowCategory:true
        },
      },
      {
        path: '/category',
        component: Category,
        meta:{
          title:'商品分类',
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
      title:'订单管理',
      isShowCategory:true
    },
    children: [
      {
        path: '/orderslist',
        component: OrdersList,
        meta:{
          title:'订单列表',
          isShowCategory:true
        },
      },
      {
        path: '/ordersset',
        component: OrdersSet,
        meta:{
          title:'订单设置',
          isShowCategory:true
        },
      },
    ]
  },
  {
    path:'/auth',
    component:Auth,
    meta:{
      title:'权限管理',
      isShowCategory:true
    },
    children: [
      {
        path: '/usermanage',
        component: UserManage,
        meta:{
          title:'用户管理',
          isShowCategory:true
        },
      },
      {
        path: '/rolemanage',
        component: RoleManage,
        meta:{
          title:'角色管理',
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


