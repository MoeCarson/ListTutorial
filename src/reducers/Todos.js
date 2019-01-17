import * as consts from '../consts.js'

export const initState = ({ todos: [] })

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case consts.BUTTON_CLICKED:
        return {...state, todos: [ { name: "This is a todo!", done: false }]}
      default:
        return state
    }
}

export const selector = state => state.Todos