import {doLogin} from '../../api'

export let loginAction = (username:string, password:string)=>{
    return async (dispatch: Function)=>{
        let res = await doLogin(username, password);
        dispatch({
            type: 'LOGIN_IN',
            payload: res
        })
    }
}