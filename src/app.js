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
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount:10500}));
const secondExpense = store.dispatch(addExpense({description: 'Gas bill', amount:6527, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount:159500}));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
store.dispatch(editExpense(secondExpense.expense.id, {description: 'Gas'}));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// const demoState = {
//     expenses: [
//         {
//             id: '0',
//             description: 'January Rent',
//             note: 'This is it',
//             amount: 54599,
//             createdAt: 0
//         }
//     ],
//     filters: {
//         text:'rent',
//         sortBy: 'amount',  // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };
