import { reducer, initState } from '../../src/reducers/createTodo.js'
import expect from 'expect'
import * as consts from '../../src/consts.js'
/* global beforeEach */


let state

describe('reducers/createTodo.js', () => {

    describe('reducer', () => {
        beforeEach( () => state = initState )

        it('should return the initial state', () => {

            expect(reducer(undefined, {})).toEqual(state)
        })

        it('should handle CREATE_TODO_UPDATED', () => {
            expect(
                reducer(state, {
                    type: consts.CREATE_TODO_UPDATED,
                    payload: 'Test Name'
                })
            ).toEqual({
                value: 'Test Name'
            })
        })

        it('should handle BUTTON_CLICKED', () => {
            expect(
                reducer(state, {
                    type: consts.BUTTON_CLICKED,
                    payload: 'Test Name'
                })
            ).toEqual({
                value: ''
            })
        })



    })
})
