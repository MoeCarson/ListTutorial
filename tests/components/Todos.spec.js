import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../../src/store'
import { TodosContainer } from '../../src/containers/Todos'
import expect from 'expect'

const store = createStore()


describe('show done checkbox', () => {

    it('the value should change when clicked', () => {
        const Todos = mount(<Provider store={store}><TodosContainer /></Provider>)

        const checkbox = Todos.find('[data-show-done-todos]').find('input')
        expect(checkbox.prop('checked')).toEqual(true)

        checkbox.simulate('change', { target: { checked: false }})

        expect(
            Todos.find('[data-show-done-todos]'
            ).find('input').prop('checked')).toEqual(false)

    })
})
