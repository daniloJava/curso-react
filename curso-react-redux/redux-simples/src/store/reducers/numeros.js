import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO,
} from '../actions/actionsTypes'

const initialNumber = {
    min: 10,
    max: 230,
}

const numeros = (state = initialNumber, action) => {
    console.log(state, ' ', action)
    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}

export default numeros
