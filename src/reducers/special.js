const initialState = {
    "day": 0,
    "daysLeft": 15
}

const advanceDay = (state = initialState) => {
    if (state.day === state.daysLeft) {
        alert("Summer time")
    }
    return {...state, "day": state.day + 1 }
}





const specialReducer = (state = initialState, action) => {

    var newstate = {}
    switch (action.type) {
        case "DIFFCLASSES":
            newstate = advanceDay(state)
            console.log("ADVANCING DAY")
            return newstate

        default:
            return state

    }
}

export default specialReducer
