import { addExpense, editExpense, removeExpense } from "../../actions/expenses"

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
    const expenseData = {
        description: 'Rent',
        amount: 400000,
        createdAt: 1000,
        note: 'Note'
    }
    expect((addExpense(expenseData))).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup add expense action object with default values', () => {
    const defaultExpenseValues = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    expect(addExpense()).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            ...defaultExpenseValues,
            id: expect.any(String) }
    })
})