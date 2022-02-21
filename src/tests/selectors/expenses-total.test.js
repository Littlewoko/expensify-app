import expenses from "../fixtures/expenses";
import getExpensesTotal from "../../selectors/expenses-total";

test('Should return 0 if no expenses', () => {
    const result = (getExpensesTotal([]))

    expect(result).toBe(0)
})

test('Should correctly add up a single expense', () => {
    const singleExpense = [expenses[0]]
    const expected = expenses[0].amount
    const result = (getExpensesTotal(singleExpense))

    expect(result).toBe(expected)
})

test('Should correctly add up multiple expenses', () => {
    let expected = 0;
    for (let i = 0; i < expenses.length; i++) {
        expected = expected + expenses[i].amount
    }
    const result = (getExpensesTotal(expenses))

    expect(result).toBe(expected)
})
