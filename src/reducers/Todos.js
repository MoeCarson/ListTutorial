import * as consts from '../consts.js'
//
export const initState = { todo: 'Test' }

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case consts.BUTTON_CLICKED:
        return {...state, value: action.payload}
      default:
        return state
    }
}

export const selector = state => state.Todos