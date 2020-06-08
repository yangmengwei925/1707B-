import React,{useState, useEffect} from 'react'
import { phoneReg,passReg } from '../utils/regexp';
import {Toast} from 'antd-mobile'
import {connect} from 'react-redux'
import {loginAction} from '../store/actions'
import { useHistory } from 'react-router';

interface IState{
    isLogin: boolean
}
interface IDispatch{
    login: (username: string, password: string)=>void
}

const LoginPage: React.FC<IState & IDispatch> = (props)=>{
    let [userName, setUserName]= useState<string>('15323807318');
    let [password, setPassword]= useState<string>('123456');

    let doLogin = ()=>{
        (window as any)._hmt.push(['_trackEvent', '登陆页面', '登陆按钮点击']);
        if (!phoneReg.test(userName)){
            Toast.info('手机号格式不正确');
            return;
        }
        if (!passReg.test(password)){
            Toast.info('密码格式不正确');
            return;
        }

        props.login(userName, password);
    }

    let history = useHistory();
    useEffect(()=>{
        if (props.isLogin){
            // 处理query
            let queryArrs = history.location.search.slice(1).split('&');         
            let queryObj:{[key:string]: any} = {};
            queryArrs.forEach(item=>{
                let arr = item.split('=');
                queryObj[arr[0]] = decodeURIComponent(arr[1])
            })
            // 重定向回跳转过来的页面或者首页
            history.replace(queryObj['redirect'] || '/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isLogin])

    return <>
        <section>
            <input type="text" placeholder="请输入您的用户名" value={userName} onChange={e=>setUserName(e.target.value)}/>
            <input type="password" placeholder="请输入您的密码" value={password} onChange={e=>setPassword(e.target.value)}/>
        </section>

        <section>
            <button onClick={doLogin}>登陆</button>
        </section>
    </>;
}

const mapStateToProps = (state:any)=>{
    return {
        isLogin: state.user.isLogin
    }
}
const mapDispatchToProps = (dispatch:Function)=>{
    return {
        login: (username: string, password:string)=>{
            dispatch(loginAction(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);