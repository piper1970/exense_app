import uuid from 'uuid';
import  database from '../firebase/firebase';

export const addExpense = (expense) => (
    {
        type:'ADD_EXPENSE',
        expense
    }
);

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = {
            description,note,amount,createdAt
        }
        return database.ref('expenses').push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((e) => {
            console.log(`Error storing expense in database: ${e}`, expense);
        });
    };
};

export const removeExpense = ({id} = {}) => (
    {
        type:'REMOVE_EXPENSE',
        id
    }
);

// SET_EXPENSES
export const setExpenses = (expenses) => {
    return {
        type:'SET_EXPENSES',
        expenses
    };
};

export const startSetExpenses = () => {
    const expenses = [];
    return (dispatch) => {
        return database.ref('expenses').once('value')
        .then((snapshot) =>{
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        }).catch((error) => {
            console.log(`Errors occurred accessing database: ${error}`);
            dispatch(setExpenses(expenses));
        });
    };
};

export const editExpense = (id, updates) => (
    {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
);
