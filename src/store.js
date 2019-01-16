import { createStore } from 'redux'
import createTodo from './reducers'

const store = createStore(createTodo)