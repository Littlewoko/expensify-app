import moment from "moment"
import expensesReducer from "../../reducers/expenses"
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, '@@INIT')
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '2'
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense with invalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '-1'
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'new',
        note: '',
        createdAt: moment(0),
        amount: 2000
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
    const updates = {
        description: 'new coffee', 
        note: 'This has been updated'
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates
    }

    const state = expensesReducer(expenses, action)

    const expected = {
        ...expenses[0],
        ...updates
    }

    expect(state[0]).toEqual(expected)
})

test('Should not edit an expense due to invalid id', () => {
    const updates = {
        description: 'new coffee', 
        note: 'This has been updated'
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})