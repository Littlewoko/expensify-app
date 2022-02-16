import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'

// Redux imports
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// CSS imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()
store.dispatch(addExpense({ description: 'Water Bill', amount: 500 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000, createdAt: 10000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 10 }))

const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
