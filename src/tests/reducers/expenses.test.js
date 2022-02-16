import expensesReducer from "../../reducers/expenses"
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, '@@INIT')
    expect(state).toEqual([])
})