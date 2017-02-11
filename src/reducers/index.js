import {combineReducers} from 'redux';
import reducer from './reducer';
import locationReducer from './locationReducer'
import specialReducer from './special'


const rootReducer = combineReducers({
	reducer, locationReducer, specialReducer
})

export default rootReducer;