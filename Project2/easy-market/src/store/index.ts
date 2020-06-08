import {createStore, combineReducers, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

// 引入子模块
import home from './reducers/home'
import user from './reducers/user'

let reducer = combineReducers({
    home,
    user
})

const middleWare = process.env.NODE_ENV==='production'?
    applyMiddleware(reduxThunk):
    applyMiddleware(reduxThunk, reduxLogger)

export default createStore(reducer, middleWare)