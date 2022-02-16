import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
        />)
})

test('Should render expense list filters component successfully', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render expense list filters component with alt data successfully', () => {
    wrapper.setProps({ filters: altFilters })
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should handle text change', () => {
    const value = 'coffee'
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    })

    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', () => {
    const value = 'amount'

    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(12, 'years')

    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })

    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should handle date focus changes', () => {
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)

    expect(wrapper.state('calenderFocused')).toEqual(calenderFocused)
})