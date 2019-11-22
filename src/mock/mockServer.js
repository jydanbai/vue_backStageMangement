import Mock from 'mockjs'
import datas from './data'
const baseUrl = '/api'
console.log(Mock);


Mock.mock(`${baseUrl}/test`, {code: 0, data: datas})
console.log(datas);
