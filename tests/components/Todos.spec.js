import { mount } from 'enzyme'
import React from 'react'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createStore from '../../src/store'
import { TodosContainer } from '../../src/containers/Todos'
import expect from 'expect'


const store = createStore()

describe('containers/Todos.js', () => {

    describe('show done checkbox', () => {

        it('the value should change when clicked', () => {
            const showdone = mount(<Provider store={store}><TodosContainer /></Provider>)
            const checkbox = showdone.find({ name: 'showDone', type: 'checkbox' }).at(0)
            expect(checkbox.props().checked).toEqual(true)
            checkbox.simulate('change', {target: {checked: false}})
            expect(checkbox.props().checked).toEqual(false)

        })
    })

})