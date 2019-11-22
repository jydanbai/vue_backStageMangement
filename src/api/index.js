/* 
包含应用中所有请求接口的函数: 接口请求函数
函数的返回值都是promise对象
*/
import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = process.env.NODE_ENV === 'production' ? '/api' : ''

// 请求登陆
// export const reqLogin = (username, password) =>  ajax.post(BASE + '/login', {username, password})



// const persons/personList/personArr = [{}, {}]



/* 获取商品分页列表 */
export const reqProductsList = (pageNum, pageSize) => ajax(BASE + '/products/list', {
  params: { // 包含所有query参数的对象
    pageNum,
    pageSize
  }
})

