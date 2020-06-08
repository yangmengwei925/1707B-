import {getHome} from '../../api'

export let commonAction = ()=>{
    return {
        type: '',
        payload: ''
    }
}

export let homeAction = ()=>{
    return async (dispatch: Function)=>{
        let res = await getHome();
        dispatch({
            type: 'INIT_HOME',
            payload: res
        })
    }
}