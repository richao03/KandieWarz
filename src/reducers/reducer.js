import { bake_cookie } from 'sfcookies'


const initialState = {
    "kandies": [{
        name: "Snackers",
        OGcost: 10,
        count: 0,
        cost: 10
    }, {
        name: "Evee Bar",
        OGcost: 15,
        count: 0,
        cost: 15
    }, {
        name: "3 Swordsmen",
        OGcost: 20,
        count: 0,
        cost: 20
    }, {
        name: "Skattles",
        OGcost: 25,
        count: 0,
        cost: 25
    }, {
        name: "Kat Kit",
        OGcost: 30,
        count: 0,
        cost: 30
    }],
    "location": {
        location: "Trade"
    },
    "classes": [
        { classes: "Science Class" },
        { classes: "Math Class" },
        { classes: "English Class" },
        { classes: "Art Class" },
        { classes: "Gym Class" },
    ],
    "mawnies": 500,
    "stash": { inStash: 0, stashLimit: 20 },
    "special": "no news"
}


const addCountByName = (state = initialState, name) => {

    const stash = {...state, "stash": { inStash: parseInt(state.stash.inStash) + 1, stashLimit: state.stash.stashLimit } }

    if (state.stash.inStash < state.stash.stashLimit) {
        const kandieCost = stash.kandies.map(kandie => {
            var answer = 0
            if (kandie.name === name && stash.mawnies >= kandie.cost) {
                answer = kandie.cost
            }
            return answer
        })
        const newstate = stash.kandies.map(kandie => {
            if (kandie.name === name && stash.mawnies >= kandie.cost) {
                return {
                    ...kandie,
                    count: kandie.count + 1
                }
            }
            return kandie
        })
        return {...stash, kandies: newstate, mawnies: stash.mawnies - kandieCost.reduce((a, b) => a + b) }
    }
    return state
}

const diffingClasses = (state = {} ) => {

  const newstate = state.kandies.map(kandie => {
        if ((Math.random() * 20).toFixed(0) % 6 === 0) {
            alert("Johnny " + kandie.name + " has been suspeneded for fighting! " + kandie.name + " is now special")
            return {...kandie, cost: parseInt((kandie.OGcost + 10 * Math.random() * 5).toFixed(0))}
    }
        if ((Math.random() * 20).toFixed(0) % 9 === 0) {
            alert("the school now sells " + kandie.name + " sending the price plummeting")
            return {...kandie, cost: parseInt((kandie.OGcost  * Math.random() * .1).toFixed(0))}
        }
        return {...kandie, cost: parseInt((kandie.OGcost * Math.random() * 2).toFixed(0)) }
    })
    return {...state, kandies: newstate }
}




const minusCountByName = (state = initialState, name) => {

    const stash = {...state, "stash": { inStash: parseInt(state.stash.inStash) - 1, stashLimit: state.stash.stashLimit } }

    const kandieCost = stash.kandies.map(kandie => {
        var answer = 0
        if (kandie.name === name && kandie.count > 0) {
            answer = kandie.cost
        }
        return answer
    })

    const newstate = stash.kandies.map(kandie => {

        if (kandie.name === name && kandie.count > 0) {
            return {
                ...kandie,
                count: kandie.count - 1
            }
        }
        return kandie
    })
    return {...stash, kandies: newstate, mawnies: stash.mawnies + kandieCost.reduce((a, b) => a + b) }
}



const askForAdvance = (state = initialState, amount) => {
    document.getElementById("adv" + amount).disabled = true;
    return {...state, mawnies: state.mawnies + amount }
}

const biggerBag = (state = initialState, size, cost) => {
    if (state.mawnies >= cost) {
        return {...state, mawnies: state.mawnies - cost, "stash": { inStash: parseInt(state.stash.inStash), stashLimit: state.stash.stashLimit + size } }
    }
    return state
}

const reducer = (state = initialState, action) => {
    var newstate = {}
    switch (action.type) {
        case "ADDCOUNT":
            newstate = addCountByName(state, action.name)
            bake_cookie('kandies', newstate)
            return newstate

        case "MINUSCOUNT":
            newstate = minusCountByName(state, action.name)
            bake_cookie('kandies', newstate)

            return newstate

        case "DIFFCLASSES":
            console.log("RECEIVED DIFF CALSES")
            newstate = diffingClasses(state)
            bake_cookie('kandies', newstate)
            return newstate


        case "ASKFORADVANCE":
            console.log("RECEIVED DIFF CALSES")
            newstate = askForAdvance(state, action.amount)
            bake_cookie('kandies', newstate)
            return newstate

        case "BIGGERBAG":
            console.log("RECEIVED DIFF CALSES")
            newstate = biggerBag(state, action.size, action.cost)
            bake_cookie('kandies', newstate)
            return newstate

        default:
            return state

    }
}

export default reducer
