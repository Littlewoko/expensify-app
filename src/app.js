import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'

// Redux imports
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// CSS imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()
store.dispatch(addExpense({ description: 'Water Bill', amount: 500 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000 }))
store.dispatch(setTextFilter('water'))

console.log(store.getState())
const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

ReactDOM.render(<AppRouter />, document.getElementById('app'));
