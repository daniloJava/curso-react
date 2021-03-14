import { createStore, combineReducers } from 'redux'
import numerosReducers from './reducers/numeros'

const reducers = combineReducers({
    numeros: numerosReducers,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig