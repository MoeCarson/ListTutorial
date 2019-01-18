import { connect } from 'react-redux'
import CreateTodo from '../components/CreateTodo'
import * as actions from '../actions'
import * as selectors from '../selectors.js'

const mapStateToProps = state => ({ value: selectors.selectValue(state), disableButton: selectors.disableButton(state) })

const mapDispatchToProps = dispatch => ({
    onChange: value => dispatch(actions.createTodoUpdated(value)),
    onClick:  value => dispatch(actions.buttonClicked(value))
})

export const CreateTodoContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTodo)