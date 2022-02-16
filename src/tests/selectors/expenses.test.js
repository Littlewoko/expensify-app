import moment from 'moment'
import selectExpenses from '../../selectors/expenses'

const expenses = [{
    id: '1',
    description: 'coffee',
    note: '',
    amount: 250,
    createdAt: 0
}, {
    id: '2',
    description: 'water',
    note: '',
    amount: 1000,
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
    id: '3',
    description: 'monster',
    note: '',
    amount: 125,
    createdAt: moment(0).add(4,'days').valueOf()
}]

test('Should filter by text value', () => {
    const filters = {
        text: 'o',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = (selectExpenses(expenses, filters))

    expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[0], expenses[1] ])
})

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ])
})