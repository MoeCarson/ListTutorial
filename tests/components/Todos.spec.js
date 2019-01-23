import { mount } from 'enzyme'
import React from 'react'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createStore from '../../src/store'
import { TodosContainer } from '../../src/containers/Todos'
import expect from 'expect'

//const testState = {'showDone': false, 'todos': [{'done': false, 'name': 'Test Name'}]}

const store = createStore()

//describe('containers/Todos.js', () => {

describe('show done checkbox', () => {

    it('the value should change when clicked', () => {
        const Todos = mount(<Provider store={store}><TodosContainer /></Provider>)
        //const checkbox = showdone.find({ name: 'showDone', type: 'checkbox' }).at(1)

        //expect(checkbox.props().checked).toEqual(true)
        expect(Todos.find('[id="showDoneUnique"]').props()).toEqual(true)

        //showdone.setProps(testState)
        //checkbox.simulate('click')
        //expect(showdone.find({ name: 'showDone', type: 'checkbox' }).at(1).props().checked).toEqual(false)
        //expect(showdone.props()).toEqual(false)
    })
})

//})