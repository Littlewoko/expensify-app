import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'

// Database Import
import './firebase/firebase'

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
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
