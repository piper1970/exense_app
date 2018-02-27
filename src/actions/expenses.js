import uuid from 'uuid';
import  database from '../firebase/firebase';

// ADD_EXPENSE
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

// REMOVE _EXPENSE
export const removeExpense = ({id} = {}) => (
    {
        type:'REMOVE_EXPENSE',
        id
    }
);

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove()
        .then(() => {
            dispatch(removeExpense({id}))
        }).catch((error) => {
            console.log(`Errors occurred removing expense ${id} from database: ${error}`);
        });
    };
}; 

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
            console.log(`Errors occurred setting expenses from database: ${error}`);
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => (
    {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
);

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates)
        .then(() => {
            dispatch(editExpense(id, updates));
        }).catch((error) => {
            console.log(`Errors occurred updating expense ${id} on database: ${error}`);
        });
    }
}
