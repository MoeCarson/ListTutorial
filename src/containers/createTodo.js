import { connect } from 'react-redux';
import CreateTodo from '../components/CreateTodo';
import * as actions from '../actions';


const mapStateToProps = state => ({ value: state.createTodo.value });

const mapDispatchToProps = dispatch => ({
        onChange: value => dispatch(actions.createTodoUpdated(value)),
        onClick:  value => dispatch(actions.buttonClicked(value))
    });

export const CreateTodoContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTodo);