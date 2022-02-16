import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import NotFoundPage from '../../components/NotFoundPage'

test('Should render 404 Not Found component', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 