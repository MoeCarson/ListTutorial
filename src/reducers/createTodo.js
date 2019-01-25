import * as consts from '../consts.js'
/// <reference types="../types.d.ts" />

export const initState = { value: '' }

/** @type { Reducer<createTodo> }  */
export const reducer = (state = initState, action) => {
    switch (action.type) {
    case consts.CREATE_TODO_UPDATED:
        return {...state, value: action.payload}
    case consts.BUTTON_CLICKED:
        return {...state, value: ''}
    case consts.HYDRATE:
        return action.payload.createTodo
    default:
        return state
    }
}

