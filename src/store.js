import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers'

const middleware = store => next => action => {
    console.log(action)
    next(action)
}

//export default () => createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middleware))
export default () => createStore(combineReducers(reducers), applyMiddleware(middleware))


