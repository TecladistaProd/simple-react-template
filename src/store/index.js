import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]
let composeEnhancers
if(process.env.NODE_ENV === 'development'){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
} else {
    composeEnhancers = compose
}
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))

export default store
