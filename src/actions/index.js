import * as consts from '../consts'

export const buttonClicked = payload => ({ type: consts.BUTTON_CLICKED, payload })
export const createTodoUpdated = payload => ({ type: consts.CREATE_TODO_UPDATED, payload })
export const createCeckBoxUpdated = ({ checked, name }) => ({ type: consts.CHECK_BOX_UPDATED, payload: { checked, name } })
export const actionShowDone = payload => ({ type: consts.SHOW_DONE_CHECK_BOX, payload })
export const createHYDRATE = payload => ({ type: consts.HYDRATE, payload })

