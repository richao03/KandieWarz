import { NEWSFLASH} from './constants'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'

export const newsFlash = (name) => {
    const action = {
        type: NEWSFLASH,
    }
    return action
}

