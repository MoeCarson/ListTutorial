import { connect } from 'react-redux';
import Todos from '../components/Todos';
import * as actions from '../actions';
import { createSelector } from 'reselect';

const selectShowDone = state => state.Todos.showDone;
const selectTodos = state => state.Todos.todos;

const getTodos = createSelector(selectShowDone, selectTodos, (showDone, todos) => (!showDone) ? todos.filter(x=>x.done === false) : todos);

const mapStateToProps = state => ({ todos: getTodos(state), showDone: state.Todos.showDone });

const mapDispatchToProps = dispatch => ({
    onChangeCheckBox: value => dispatch(actions.createCeckBoxUpdated(value)),
    onChangeShowDone: value => dispatch(actions.actionShowDone(value)),
});

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);