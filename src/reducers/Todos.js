import * as consts from '../consts.js'
//
export const initState = { todo: '' }

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case consts.BUTTON_CLICKED:
        return {...state, todo: "NEW TODO CREATED"}
      default:
        return state
    }
}

export const selector = state => state.Todos