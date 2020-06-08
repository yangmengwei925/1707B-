import axios from '../utils/request'

// 首页数据
export let getHome = ()=>{
    return axios.get('/');
}