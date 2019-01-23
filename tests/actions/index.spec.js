import * as actions from '../../src/actions/index.js'
import expect from 'expect'
/* global beforeEach */

let payload

describe('actions/index.js', () => {

    describe('actions', () => {
        beforeEach( () => payload = 'Test Name' )

        it('should handle BUTTON_CLICKED', () => {
            expect(
                actions.buttonClicked( payload )).toEqual({
                payload: 'Test Name',
                type: 'button_clicked'
            })
        })

        it('should handle CREATE_TODO_UPDATED', () => {
            expect(
                actions.createTodoUpdated( payload )).toEqual({
                payload: 'Test Name',
                type: 'create_todo_updated'
            })
        })

        it('should handle CHECK_BOX_UPDATED', () => {
            expect(
                actions.createCeckBoxUpdated({
                    checked: false, name: 'Test Name'
                })).toEqual({
                payload: {
                    checked: false, name: 'Test Name'
                }, type: 'check_box_updated'
            })
        })

        it('should handle SHOW_DONE_CHECK_BOX', () => {
            expect(
                actions.actionShowDone( payload )).toEqual({
                payload: 'Test Name',
                type: 'show_done_check_box'
            })
        })

    })
})
