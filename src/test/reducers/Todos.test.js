
import { reducer } from '../../reducers/Todos.js'
import expect from 'expect'
//import * as consts from '../../consts.js'
//import * as actions from '../../actions/index.js'
/*
will have a root describe block passed the file name example: describe('actions/foo.js', () =>

will have within that root describe a describe for each method tested example: describe('someAction', () =>
each function describe block will have only as many it('should bla bla bla...' actual unit tests as necc pls do not make 100 unit tests for something like an action which only needs 1 test
*/

describe('reducers/Todos.js', () => {

    describe('reducer', () => {

        it('should return the initial state', () =>
        {
            expect(reducer(undefined, {})).toEqual({ todos: [], showDone: true})
        })

    })
})
