/// <reference path="../types.d.ts" />
import * as consts from '../consts.js'

export const initState = ({ todos: [], showDone: true})

/** @type { Reducer<Todos> }  */
export const reducer = (state = initState, action) => {
    switch (action.type) {
    case consts.BUTTON_CLICKED:
        return {...state, todos: [...state.todos, { name: action.payload, done: false }]}
    case consts.CHECK_BOX_UPDATED:
        return {...state, todos: state.todos.map(todo => todo.name === action.payload.name ?
        // transform the one with a matching id
            { ...todo, done: action.payload.checked }:
        // otherwise return original todo
            todo)}
    case consts.SHOW_DONE_CHECK_BOX:
        return {...state, showDone: action.payload}
    case consts.HYDRATE:
        return action.payload.Todos
    default:
        return state
    }
}


