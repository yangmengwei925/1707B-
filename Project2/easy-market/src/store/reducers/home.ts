import {IAction} from '../../utils/interface'

const initialVal = {
    banner:  [],
    channel: [],
    newGoodsList: [],
    hotGoodsList: [],
    brandList: [],
    topicList: [],
    categoryList: []
}

let HomeReducer = (state:any, action: IAction)=>{
    switch(action.type){
        case 'INIT_HOME': 
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default (state=initialVal, action: IAction)=>HomeReducer(state, action);