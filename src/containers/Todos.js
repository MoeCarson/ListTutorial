import { connect } from 'react-redux';
import Todos from '../components/Todos';
import * as actions from '../actions';

const mapStateToProps = state => ({ todos: state.Todos.todos, showDone: state.Todos.showDone });

const mapDispatchToProps = dispatch => ({
    onChangeCheckBox: value => dispatch(actions.createCeckBoxUpdated(value)),
    onChangeShowDone: value => dispatch(actions.actionShowDone(value)),
});


export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);