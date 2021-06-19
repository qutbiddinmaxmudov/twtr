import { createStore, compose } from 'redux'
import { rootReducer as reducer } from './rootReducer'
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(reducer, composeEnhancers())
