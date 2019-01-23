import { mount } from 'enzyme'
import React from 'react'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createStore from '../../src/store'
import { TodosContainer } from '../../src/containers/Todos'
import expect from 'expect'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

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