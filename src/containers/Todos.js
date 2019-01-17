import { connect } from 'react-redux';
import Todos from '../components/Todos';
import * as actions from '../actions';

const mapStateToProps = state => ({ todo: state.Todos.todo });

const mapDispatchToProps = dispatch => ({
        onClick:  () => dispatch(actions.buttonClicked())
    });

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);