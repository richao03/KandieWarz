import { DIFFCLASSES, SPECIALTIME} from './constants'

// export const DifferentClasses = (state) => {
//     const action = {
//         type: DIFFCLASSES, SPECIALTIME
//     }
// console.log(action.type)
//     return action
// }



export const DifferentClasses = (state) =>{
  return function(dispatch, getState) {
  	const stateFromAction = getState()
    dispatch({
      type: DIFFCLASSES,
      stateFromAction
      
    })
    dispatch({
      type: SPECIALTIME,
      stateFromAction
    })
  }
}