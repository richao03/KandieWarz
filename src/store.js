import {createStore, applyMiddleware} from 'redux';
import rootReducer from "./reducers/index"
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,  applyMiddleware(logger(), thunk))
// const store = createStore(reducer)
//combineReducers({reducer, goToReducer})
export default store