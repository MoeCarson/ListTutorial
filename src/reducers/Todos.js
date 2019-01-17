import * as consts from '../consts.js'
//import { Todos } from './index.js';

export const initState = ({ todos: [] })

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case consts.BUTTON_CLICKED:
        return {...state, todos: [... state.todos, { name: action.payload, done: false }]}
      default:
        return state
    }
}

export const selector = state => state.Todos