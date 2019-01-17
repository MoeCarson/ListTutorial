import { connect } from 'react-redux';
import Todos from '../components/Todos';
import * as actions from '../actions';


const mapStateToProps = state => ({ value: state.createTodo.value });

const mapDispatchToProps = dispatch => ({
        onChange: value => dispatch(actions.createTodoUpdated(value)),
        onClick:  () => dispatch(actions.buttonClicked())
    });

export const CreateTodos = connect(mapStateToProps, mapDispatchToProps)(Todos);