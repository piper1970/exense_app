import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const moment_format = 'YYYY-MM-DD HH:mm';

// Filter data
// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || 
            typeof expense.description !== 'string' ||
            expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {

        // desc order
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt;
        }else{
            return a.amount < b.amount;
        }
    });
};

// Sort data on given type
const getSortedExpenses = (expenses, {}) => {

};

// Expense actions
const addExpense = (
    {
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => (
    {
        type:'ADD_EXPENSE',
        expense:{
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
);

const removeExpense = ({id} = {}) => (
    {
        type:'REMOVE_EXPENSE',
        id
    }
);

const editExpense = (id, updates) => (
    {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
);

// Filter actions
const setTextFilter = (text = '') => (
    {
        type:'SET_TEXT_FILTER',
        text
    }
);

const sortByDate = () => (
    {
        type:'SORT_BY_DATE',
        sortBy: 'date'
    }
);

const sortByAmount = () => (
    {
        type:'SORT_BY_AMOUNT',
        sortBy: 'amount'
    }
);

const setStartDate = (startDate) => (
    {
        type:'SET_START_DATE',
        startDate
    }
);

const setEndDate = (endDate) => (
    {
        type:'SET_END_DATE',
        endDate
    }
);

// EXPENSE REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
            return state;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ... action.updates
                    };
                }else{
                    return expense;
                }
            })
            return state;
        default:
            return state;
    }
};

// FILTER REDUCER
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            };
        default:
            return state;
    }
};

// Store creation
const store = createStore(combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent is due', amount: 99999, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 475, note:'This is my last one!', createdAt: 1111}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id,
//     {
//         amount: 555
//     }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));
// store.dispatch(setTextFilter('rent'));

const demoState = {
    expenses: [
        {
            id: '0',
            description: 'January Rent',
            note: 'This is it',
            amount: 54599,
            createdAt: 0
        }
    ],
    filters: {
        text:'rent',
        sortBy: 'amount',  // date or amount
        startDate: undefined,
        endDate: undefined
    }
};