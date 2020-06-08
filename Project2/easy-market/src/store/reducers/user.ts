import {IAction} from '../../utils/interface'
import {setToken} from '../../utils/index'

const initialVal = {
    mobile: '',
    isLogin: false
}

let UserReducer = (state:any, action: IAction)=>{
    switch(action.type){
        case 'LOGIN_IN': 
            setToken(action.payload.sessionKey);
            return {...state, mobile: action.payload.mobile, isLogin: true};
        default:
            return state;
    }
}

export default (state=initialVal, action: IAction)=>UserReducer(state, action);