import { 
    setStartDate, 
    setEndDate, 
    sortByDate, 
    sortByAmount, 
    setTextFilter 
} from "../../actions/filters"

import moment from 'moment'

test('Should setup set start date action object', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should setup set end date action object', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should setup sort by date action object', () => {
    expect(sortByDate()).toEqual({ 
        type: 'SET_SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('Should setup sort by amount action object', () => {
    expect(sortByAmount()).toEqual({ 
        type: 'SET_SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})

test('Should setup text filter action object with passed value', () => {
    const text = 'rent'

    expect(setTextFilter(text)).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('Should setup text filter action object with default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})