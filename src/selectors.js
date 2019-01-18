import { createSelector } from 'reselect';

export const selectShowDone = state => state.Todos.showDone;
export const selectTodos = state => state.Todos.todos;
export const selectValue = state => state.createTodo.value;

export const getTodos = createSelector(selectShowDone, selectTodos, (showDone, todos) => (!showDone) ? todos.filter(todo => todo.done === false) : todos);

export const disableButton = createSelector(selectTodos, selectValue, (todos, value) =>   (todos.map(todo => todo.name === value).includes(true)));

