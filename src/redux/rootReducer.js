import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

