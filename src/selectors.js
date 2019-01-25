/// <reference path="./types.d.ts" />
import { createSelector } from 'reselect'

/** @param { State } state */
export const selectShowDone = state => state.Todos.showDone
/** @param { State } state */
export const selectTodos = state => state.Todos.todos
/** @param { State } state */
export const selectValue = state => state.createTodo.value

export const getTodos = createSelector(selectShowDone, selectTodos, (showDone, todos) => (!showDone) ? todos.filter(todo => todo.done === false) : todos)
export const disableButton = createSelector(selectTodos, selectValue, (todos, value) => ((todos.map(todo => todo.name === value).includes(true)) || value===''))

