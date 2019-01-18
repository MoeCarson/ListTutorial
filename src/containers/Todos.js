import { connect } from 'react-redux';
import Todos from '../components/Todos';
import * as actions from '../actions';
import * as selectors from '../selectors.js';

const mapStateToProps = state => ({ todos: selectors.getTodos(state), showDone: selectors.selectShowDone(state) });

const mapDispatchToProps = dispatch => ({
    onChangeCheckBox: value => dispatch(actions.createCeckBoxUpdated(value)),
    onChangeShowDone: value => dispatch(actions.actionShowDone(value)),
});

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);