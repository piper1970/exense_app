import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/expenses-store';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import {addExpense, editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount:10500}));
const secondExpense = store.dispatch(addExpense({description: 'Gas bill', amount:6527}));

setTimeout (() => {
    store.dispatch(setTextFilter('bill'));
}, 5000);

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
store.dispatch(editExpense(secondExpense.expense.id, {description: 'Gas'}));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
