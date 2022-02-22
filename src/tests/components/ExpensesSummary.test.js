import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('Should not render if no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={234} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 

test('Should render number of expenses and total value', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={1234566} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 