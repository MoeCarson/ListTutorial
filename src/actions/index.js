import * as consts from '../consts'
/// <reference types="../types.d.ts" />

/** @type { ActionCreator<Boolean> }  */
export const buttonClicked = payload => ({ type: consts.BUTTON_CLICKED, payload })

/** @type { ActionCreator<string> }  */
export const createTodoUpdated = payload => ({ type: consts.CREATE_TODO_UPDATED, payload })

/** @type { ActionCreator<{checked: Boolean, name: string}> }  */
export const createCeckBoxUpdated = ({ checked, name }) => ({ type: consts.CHECK_BOX_UPDATED, payload: { checked, name } })

/** @type { ActionCreator<Boolean> }  */
export const actionShowDone = payload => ({ type: consts.SHOW_DONE_CHECK_BOX, payload })

/** @type { ActionCreator<any> }  */
export const createHYDRATE = payload => ({ type: consts.HYDRATE, payload })

