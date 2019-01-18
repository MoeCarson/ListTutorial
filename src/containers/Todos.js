import { connect } from 'react-redux';
import Todos from '../components/Todos';
import * as actions from '../actions';
import { createSelector } from 'reselect'

const selectShowDone = state => state.todos.showDone;
const selectTodos = state => state.todos.todos;

const getTodos = createSelector(selectShowDone, selectTodos, (!selectShowDone) ? selectTodos.filter(x=>x.done === false) : selectTodos) => 



const mapStateToProps = state => ({ todos: (!state.Todos.showDone) ? state.Todos.todos.filter(x=>x.done === false) : state.Todos.todos, showDone: state.Todos.showDone });

const mapDispatchToProps = dispatch => ({
    onChangeCheckBox: value => dispatch(actions.createCeckBoxUpdated(value)),
    onChangeShowDone: value => dispatch(actions.actionShowDone(value)),
});

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);