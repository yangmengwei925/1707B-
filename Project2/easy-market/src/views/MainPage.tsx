import React from 'react'
import RouterView from '../router/RouterView';
import {IRouterProp} from '../utils/interface'

const LoginPage: React.FC<IRouterProp> = props=>{
    return <>
        <RouterView routes={props.routes}></RouterView>
        <footer>

        </footer>
    </>;
}

export default LoginPage;