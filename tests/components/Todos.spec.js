import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../../src/store'
import { TodosContainer } from '../../src/containers/Todos'
import expect from 'expect'
import * as actions from '../../src/actions/index.js'

const store = createStore()
store.dispatch(actions.buttonClicked('Test Name'))
const Todos = mount(<Provider store={store}><TodosContainer /></Provider>)


describe('show done checkbox', () => {

    it('the value should change when clicked', () => {


        const checkbox = Todos.find('[data-show-done-todos]').find('input')
        expect(checkbox.prop('checked')).toEqual(true)

        checkbox.simulate('change', { target: { checked: false }})

        expect(
            Todos.find('[data-show-done-todos]'
            ).find('input').prop('checked')).toEqual(false)

        checkbox.simulate('change', { target: { checked: true }})

    })
})


describe('individual tasks completed checkboxes', () => {

    it('the value should change when clicked', () => {

        const checkbox2 = Todos.find({ name: 'Test Name' }).find('input')
        expect(checkbox2.prop('checked')).toEqual(false)

        checkbox2.simulate('change', { target: { checked: true }})

        expect(Todos.find({ name: 'Test Name' }).find('input').prop('checked')).toEqual(true)
    })
})
