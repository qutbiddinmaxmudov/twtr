import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer as reducer } from './rootReducer'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const saga = createSagaMiddleware()

export const store = createStore(reducer, composeEnhancers(applyMiddleware(saga)))

saga.run(rootSaga)
