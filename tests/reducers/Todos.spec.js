
import { reducer } from '../../src/reducers/Todos.js'
import expect from 'expect'
import * as consts from '../../src/consts.js'
/*
will have a root describe block passed the file name example: describe('actions/foo.js', () =>

will have within that root describe a describe for each method tested example: describe('someAction', () =>
each function describe block will have only as many it('should bla bla bla...' actual unit tests as necc pls do not make 100 unit tests for something like an action which only needs 1 test
*/

const initialState = { todos: [], showDone: true}
const testState = {'showDone': true, 'todos': [{'done': false, 'name': 'Test Name'}]}

describe('reducers/Todos.js', () => {

    describe('reducer', () => {

        it('should return the initial state', () => {

            expect(reducer(undefined, {})).toEqual(initialState)
        })

        it('should handle BUTTON_CLICKED', () => {
            expect(
                reducer(initialState, {
                    type: consts.BUTTON_CLICKED,
                    payload: 'Test Name'
                })
            ).toEqual({
                'showDone': true, 'todos': [
                    {'done': false, 'name': 'Test Name'}
                ]})
        })


        it('should handle CHECK_BOX_UPDATED with todo.name === action.payload.name', () => {
            expect(
                reducer(testState, {
                    type: consts.CHECK_BOX_UPDATED,
                    payload: { checked: true, name: 'Test Name' }
                })
            ).toEqual({
                'showDone': true, 'todos': [
                    {'done': true, 'name': 'Test Name'}
                ]})
        })

        it('should handle CHECK_BOX_UPDATED with todo.name != action.payload.name', () => {
            expect(
                reducer(testState, {
                    type: consts.CHECK_BOX_UPDATED,
                    payload: { checked: true, name: 'Wrong Name' }
                })
            ).toEqual(testState)
        })

        it('should handle SHOW_DONE_CHECK_BOX', () => {
            expect(
                reducer(testState, {
                    type: consts.SHOW_DONE_CHECK_BOX,
                    payload: false
                })
            ).toEqual({
                'showDone': false, 'todos': [
                    {'done': false, 'name': 'Test Name'}
                ]})
        })

    })
})
