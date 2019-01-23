import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../../src/store'
import { TodosContainer } from '../../src/containers/Todos'
import expect from 'expect'
import * as actions from '../../src/actions/index.js'
/* global beforeEach */

let store
let Todos

describe('components/Todo.js', () => {

    describe('show done checkbox', () => {
        beforeEach( () => store = createStore())
        beforeEach( () => Todos = mount(<Provider store={store}><TodosContainer /></Provider>))

        it('the value should change when clicked', () => {


            const checkbox = Todos.find('[data-show-done-todos]').find('input')
            expect(checkbox.prop('checked')).toEqual(true)

            checkbox.simulate('change', { target: { checked: false }})

            expect(
                Todos.find('[data-show-done-todos]'
                ).find('input').prop('checked')).toEqual(false)

        })
    })

    describe('individual tasks completed checkboxes', () => {
        beforeEach( () => store = createStore())
        beforeEach( () => store.dispatch(actions.buttonClicked('Test Name')))
        beforeEach( () => Todos = mount(<Provider store={store}><TodosContainer /></Provider>))


        it('the value should change when clicked', () => {


            const checkbox = Todos.find({ name: 'Test Name' }).find('input')
            expect(checkbox.prop('checked')).toEqual(false)

            checkbox.simulate('change', { target: { checked: true }})

            expect(Todos.find({ name: 'Test Name' }).find('input').prop('checked')).toEqual(true)
        })
    })

})