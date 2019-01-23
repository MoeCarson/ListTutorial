import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../../src/store'
import { CreateTodoContainer } from '../../src/containers/createTodo'
import { TodosContainer } from '../../src/containers/Todos'
import expect from 'expect'
import * as actions from '../../src/actions/index.js'

/* global beforeEach */

let store
let createTodo

describe('components/creatTodo.js', () => {

    describe('text input', () => {
        beforeEach( () => store = createStore())
        beforeEach( () => createTodo = mount(<Provider store={store}><CreateTodoContainer /></Provider>))

        it('should update the value when new text is entered', () => {

            const textarea = createTodo.find('[text-area-for-todos]').find('textarea')
            expect(textarea.text()).toEqual('')

            textarea.simulate('change', { target: { value: 'testing' }})

            expect(createTodo.find('[text-area-for-todos]').find('textarea').text()).toEqual('testing')

        })
    })

    describe('button', () => {
        beforeEach( () => store = createStore())
        beforeEach( () => store.dispatch(actions.createTodoUpdated('Test Value')))
        beforeEach( () => createTodo = mount(<Provider store={store}><CreateTodoContainer /><TodosContainer /></Provider>))

        it('it should clear the textarea when its clicked' , () => {

            expect(createTodo.find('[text-area-for-todos]').find('textarea').text()).toEqual('Test Value')

            createTodo.find('[button-for-todos]').at(0).simulate('click')

            expect(createTodo.find('[text-area-for-todos]').find('textarea').text()).toEqual('')

        })

        it('it should add a task to the list when clicked' , () => {

            expect(createTodo.find('[text-area-for-todos]').find('textarea').text()).toEqual('Test Value')

            createTodo.find('[button-for-todos]').at(0).simulate('click')

            expect(createTodo.find({ name: 'Test Value' }).find('input').exists()).toEqual(true)
        })
    })


})