
let  Login = () => import('../pages/Login/Login.vue')
let  Home = () => import('../pages/Home/Home.vue')
let  Products = () => import('../pages/Products/Products.vue')
let  Orders = () => import('../pages/Orders/Orders.vue')
let  Auth = () => import('../pages/Auth/Auth.vue')



// 专门放置路由信息
export default [
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/Home',
    component:Home
  },
  {
    path:'/Products',
    component:Products
  },
  {
    path:'/Orders',
    component:Orders
  },
  {
    path:'/Auth',
    component:Auth
  },
  {
    path:'/',
    redirect:'/Products'
  },
]


