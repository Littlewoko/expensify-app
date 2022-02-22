import React from 'react'
import { connect } from 'react-redux'
import selectedExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formatTotal = numeral(expenseTotal / 100).format('0,0.00')
    return (
        <div>
            <h2>
                Viewing {expenseCount} {expenseWord} totalling £{formatTotal}    
            </h2>
        </div>
    )
}
    

const mapStateToProps = (state) => {
    const visibleExpenses = selectedExpenses(state.expenses, state.filters)
    return {
        expenseTotal: getExpensesTotal(visibleExpenses),
        expenseCount: visibleExpenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary)