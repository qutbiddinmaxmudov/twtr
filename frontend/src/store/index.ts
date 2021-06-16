import {createStore} from 'redux'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function reducer() {
  
}

const store = createStore(reducer)