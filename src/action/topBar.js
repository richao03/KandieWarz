import { TRADE, CLASS, HOME } from './constants'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'

export const GoToTrade = () => {
    const action = {
        type: TRADE,
        
    }
    console.log("this Trade from Topbar", action)
    return action
}

export const GoToClass = () => {
    const action = {
        type: CLASS,
        
    }
    console.log("this Class from Topbar", action)
    return action
}

export const GoToHome = () => {
    const action = {
        type: HOME,
        
    }
    console.log("this Home from Topbar", action)
    return action
}
