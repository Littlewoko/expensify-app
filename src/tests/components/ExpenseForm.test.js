import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm {...expenses[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})