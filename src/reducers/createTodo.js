import * as consts from '../consts.js'


export const initState = { value: '' }


export const reducer = (state = initState, action) => {
    switch (action.type) {
    case consts.CREATE_TODO_UPDATED:
        return {...state, value: action.payload}
    case consts.BUTTON_CLICKED:
        return {...state, value: ''}
    default:
        return state
    }
}


//export const selector = state => state.createTodo
