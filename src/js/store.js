import { createStore } from 'redux'
import rootReducer from './reducers'
import shoppingCartData from '../../public/data.json'

/**
 * Creates store with initial state set to the product items, which are then
 * passed to rootReducer as that product items property are the only ones that
 * care going to change, there is no need to pass all other data to state
 **/
const store = createStore(rootReducer, shoppingCartData.data.items)

export default store
