import { ASKFORADVANCE, BIGGERBAG} from './constants'

export const AskForAdvance = (amount) => {
    const action = {
        type: ASKFORADVANCE,
        amount
    }

    return action
}

export const BiggerBag = (size, cost) => {
    const action = {
        type: BIGGERBAG,
        size,
        cost
    }

    return action
}

