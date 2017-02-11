import { bake_cookie } from 'sfcookies'

const initialState = {
    "location": "trade"
}

const goingToTrade = (state = initialState) => {
    return {...state, "location": "trade" }
}

const goingToClass = (state = initialState) => {
    return {...state, "location": "class" }
}

const goingToHome = (state = initialState) => {
    return {...state, "location": "home" }
}


const locationReducer = (state = initialState, action) => {

    var newstate = {}
    switch (action.type) {
        case "TRADE":
        console.log("WE INSDIE TRACE")
            newstate = goingToTrade(state)
            bake_cookie('kandies', newstate)
            console.log("going to trade")
            return newstate
        case "CLASS":
            newstate = goingToClass(state)
            bake_cookie('kandies', newstate)
            console.log("going to class")
            return newstate
        case "HOME":
            newstate = goingToHome(state)
            bake_cookie('kandies', newstate)
            console.log("going to home")
            return newstate

        default:
            return state

    }
}

export default locationReducer
