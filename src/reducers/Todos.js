import * as consts from '../consts.js'

export const initState = ({ todos: [] })

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case consts.BUTTON_CLICKED:
            return {...state, todos: [...state.todos, { name: action.payload, done: false }]}
        case consts.CHECK_BOX_UPDATED:
            return {...state, todos: [...state.todos, { name: action.payload, done: true }]}
        default:
            return state
    }
}

export const selector = state => state.Todos