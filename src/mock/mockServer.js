import Mock from 'mockjs'
import {info} from './data.json'


Mock.mock('/test',info)
//const baseUrl = '/api'

//Mock.mock(`${baseUrl}/orderDatas` ,info )
 Mock.mock('/orderDatas',info )
console.log(info);
console.log(11111);


// const baseUrl = '/api'
// console.log(Mock);
// Mock.mock(`${baseUrl}/test`, {code: 0, data: datas})

// Mock.mock(`${baseUrl}/test`, {code: 0, data: datas})
// 
