import * as consts from '../consts.js'

export const initState = ({ todos: [1, 2, 3] })

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case consts.BUTTON_CLICKED:
        return {...state, todos: [1, 2, 3, 4, 5, 6, 7]}
      default:
        return state
    }
}

export const selector = state => state.Todos