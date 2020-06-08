import request from '../utils/request'

// 登陆接口
export let login = (code)=>{
    return request.post('/user/code2session', {code});
}

// 解密数据
export let decrypt = (iv, encryptedData)=>{
    return request.post('/user/decrypt', {iv, encryptedData});
}