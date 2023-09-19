
import { contactReducer } from './reducers/contact.reducer.js'

const { createStore, compose, combineReducers } = Redux

const rootReducer = combineReducers({
    contactModule: contactReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export const store = createStore(rootReducer, middleware)
export const store = createStore(rootReducer, composeEnhancers())

console.log('store.getState():', store.getState())
// window.gStore = store

// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })
