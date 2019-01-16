import * as consts from '../consts.js'

export const buttonClicked = () => ({ type: consts.BUTTON_CLICKED })
export const createTodoUpdated = payload => ({ type: consts.CREATE_TODO_UPDATED, payload })

