
import { reducer, initState } from '../../src/reducers/Todos.js'
import expect from 'expect'
import * as consts from '../../src/consts.js'

const testState = {'showDone': true, 'todos': [{'done': false, 'name': 'Test Name'}]}
let state

describe('reducers/Todos.js', () => {


    describe('reducer', () => {
        beforeEach( () => state = initState )

        it('should return the initial state', () => {

            expect(reducer(undefined, {})).toEqual(state)
        })

        it('should handle BUTTON_CLICKED', () => {
            expect(
                reducer(state, {
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
                reducer(state, {
                    type: consts.SHOW_DONE_CHECK_BOX,
                    payload: false
                })
            ).toEqual({
                todos: [], showDone: false
            })
        })

    })
})
