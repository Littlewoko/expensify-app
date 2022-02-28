import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses"
import expenses from '../fixtures/expenses'


const createMockStore = configureMockStore([thunk])

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
}) 

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New Note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note'
        }
    })
})

test('Should setup add expense action object with passed values', () => {
    const expenseData = expenses[2]

    expect((addExpense(expenseData))).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData
    })
})

// test('should add expense to database and store', (done) => {
//     const store = createMockStore({})

//     const expenseData = {
//         description: 'Mouse',
//         amount: '6000',
//         note: 'good mouse',
//         createdAt: 1000
//     }
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions()
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         })
//         done()
//     });
// })

test('should add expense with defaults to database and store', () => {
    
})

// test('Should setup add expense action object with default values', () => {
//     const defaultExpenseValues = {
//         description: '',
//         amount: 0,
//         createdAt: 0,
//         note: ''
//     }
//     expect(addExpense()).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: { 
//             ...defaultExpenseValues,
//             id: expect.any(String) }
//     })
// })