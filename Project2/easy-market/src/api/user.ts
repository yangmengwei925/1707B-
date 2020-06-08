import axios from '../utils/request'

// 登陆接口
export let doLogin = (mobile: string, password: string) => {
    return axios.post('/auth/loginByMobile', { mobile, password });
}