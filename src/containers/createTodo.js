import { connect } from 'react-redux';
import CreateTodo from '../components/CreateTodo';
import * as actions from '../actions';


const mapStateToProps = state => ({ value: state.createTodo.value });

const mapDispatchToProps = dispatch => ({
        value: value => dispatch(actions.createTodoUpdated(value)),
        onClick:  actions.buttonClicked()
    });

export const CreateTodoContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTodo);