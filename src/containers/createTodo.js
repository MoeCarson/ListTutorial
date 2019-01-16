import { connect } from 'react-redux';
import CreateTodo from '../components/CreateTodo';


const mapStateToProps = state => ({ value: state.createTodo.value });

const mapDispatchToProps = dispatch => ({ action: "value" });

export const CreateTodoContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTodo);