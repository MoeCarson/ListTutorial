import * as consts from '../consts.js'

export const buttonClicked = payload => ({ type: consts.BUTTON_CLICKED, payload })
export const createTodoUpdated = payload => ({ type: consts.CREATE_TODO_UPDATED, payload })

