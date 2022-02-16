import moment from "moment"
import filtersReducer from "../../reducers/filters"

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sort by to amount', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_SORT_BY_AMOUNT',
        sortBy: 'amount'
    })

    expect(state.sortBy).toBe('amount')
})

test('Should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined, 
        sortBy: 'amount'
    }

    const state = filtersReducer(currentState, { 
        type: 'SET_SORT_BY_DATE',
        sortBy: 'date'
    })

    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const text = 'testFilter'

    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text
    })

    expect(state.text).toEqual(text)
})

test('Should set start date', () => {
    const startDate = moment(0)

    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate
    })

    expect(state.startDate).toEqual(startDate)
})

test('Should set end date', () => {
    const endDate = moment(0)

    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate
    })

    expect(state.endDate).toBe(endDate)
})