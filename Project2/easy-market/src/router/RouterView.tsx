import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { RouteComponentProps, useHistory } from 'react-router';
import {IRouterProp} from '../utils/interface'
import { getToken } from '../utils/index';


let RouterView: React.FC<IRouterProp> = props=>{
    let history = useHistory();    
    return <Switch>{
        props.routes.map((item, index)=>{
            if (item.redirect){
                if (item.path === '*'){
                    return <Redirect key={item.path} to={item.redirect}/>
                }
            }
            return <Route key={item.path} path={item.path} render={(renderProps: RouteComponentProps)=>{
                // 登陆拦截器
                let {match: {path}} = renderProps;
                if (!getToken() && path !== '/login'){
                    history.replace(`/login?redirect=${encodeURIComponent(path)}`);
                    return;
                }
                
                if (item.children){
                    return <item.component routes={item.children} {...renderProps}/>
                }else{
                    return <item.component {...renderProps}/>
                }
            }}></Route>
        })
    }</Switch>
}   


export default RouterView