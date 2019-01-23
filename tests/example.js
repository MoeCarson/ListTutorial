/*
import React from 'react'
//import configureStore from 'redux-mock-store'
import configureStore from '../mockStore'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import SecurityContainer from '../../src/containers/security'
import '../setupTests'

const store = configureStore()

describe('security banner', () => {
    beforeEach(() => {

    }),

    it('should change the banner when clicked', () => {
        const banner = mount(<Provider store={store}><SecurityContainer /></Provider>)
        expect(banner.find('#security-banner').text()).toEqual('UNCLASSIFIED//')
        banner.find('#security-banner').simulate('click')
        expect(banner.find('#security-banner').text()).toEqual('LAITNEDIFNOC//')
        banner.find('#security-banner').simulate('click')
        expect(banner.find('#security-banner').text()).toEqual('TERCES//')
        banner.find('#security-banner').simulate('click')
        expect(banner.find('#security-banner').text()).toEqual('TERCES POT//')
        banner.find('#security-banner').simulate('click')
        expect(banner.find('#security-banner').text()).toEqual('UNCLASSIFIED//')
    })
})
*/