import { ADDCOUNT, MINUSCOUNT } from './constants'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'

export const AddCount = (name) => {
    const action = {
        type: ADDCOUNT,
        name
    }
    console.log("this action from numbers", action)
    return action
}

export const MinusCount = (name) => {
    const action = {
        type: MINUSCOUNT,
        name
    }
    console.log("this action from numbers", action)
    return action
}
