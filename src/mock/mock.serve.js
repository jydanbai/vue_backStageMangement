import Mock from "mockjs";
import { info } from "./data.json";

Mock.mock('/test',info)
//const baseUrl = '/api'

//Mock.mock(`${baseUrl}/orderDatas` ,info )
Mock.mock('/orderDatas',info )