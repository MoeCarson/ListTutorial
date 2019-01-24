import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import * as reducers from './reducers'
import * as R from 'ramda'
import * as actions from './actions/index.js'
import { set, get } from 'idb-keyval'


const middleware = store => {
    get('redux').then(val => store.dispatch(actions.createHYDRATE(val)))

    return next => action =>
    {

        next(action)
        set('redux', store.getState())

    }
}

const composeEnhancers = R.propOr(compose, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', window)

export default () => createStore(combineReducers(reducers), composeEnhancers( applyMiddleware(middleware) ))

