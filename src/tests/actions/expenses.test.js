import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, startSetExpenses, setExpenses, startRemoveExpense, removeExpense}  from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const expenseData = {};
beforeEach((done) => {
    expenses.forEach(({id, description, note, amount, createdAt}) =>
        expenseData[id] = {description, note, amount, createdAt});

    database.ref('expenses').set(expenseData)
        .then(() => { done();});
});

describe('addExpense', () => {

    test('should add expense with given data', () => {
        const expectedResult = {
            type:'ADD_EXPENSE',
            expense: expenses[0]
        };
        
        const result = addExpense(expenses[0]);
    
        expect(result).toEqual(expectedResult);
    });

});

describe('editExpense', () => {
    test('should setup edit expense action object', () => {

        const updates = {note: 'SomeNote'};
        const id = '123abc';
        const expectedResponse = {
            type:'EDIT_EXPENSE',
            id,
            updates
        }
        const action = editExpense(id, updates);
        expect(action).toEqual(expectedResponse);
    });
});

describe('removeExpense', () => {
    test('should setup remove expense action object', () => {
        const action = removeExpense({id: '123abc'});
        expect(action).toEqual({
            type:'REMOVE_EXPENSE',
            id: '123abc'
        });
    });
    test('should remove expense from database', (done) => {
        const store = createMockStore({});
        const id = expenses[0].id;
        const idObject = {id};
        return store.dispatch(startRemoveExpense(idObject))
        .then(() => {
            return database.ref(`expenses/${id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
    });
});

describe('Adding expenses to database store', () => {
    test('should add expense to database and store', (done) => {
        const store = createMockStore({});
        const expenseData = {
            description:'Course',
            amount: 999,
            note: 'This one is cool',
            createdAt: 1000
        };
        
        return store.dispatch(startAddExpense(expenseData)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:'ADD_EXPENSE',
                expense:{
                    id: expect.any(String),
                    ...expenseData
                }
            });
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    });

    test('should add expense with defaults to database and store', (done) => {
        const store = createMockStore({});

        const expenseDefaults = {
            description:'',
            amount: 0,
            note: '',
            createdAt: 0
        };       
        return store.dispatch(startAddExpense()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:'ADD_EXPENSE',
                expense:{
                    id: expect.any(String),
                    ...expenseDefaults
                }
            });
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
    });
});

describe('SET_EXPENSES', () => {
    test('should setup set expense action object with data', () => {
        const action = setExpenses(expenses);
        expect(action).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
    });
    test('shoulf fetch expenses from database', (done) => {
        const store = createMockStore({});
        store.dispatch(startSetExpenses())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:'SET_EXPENSES',
                expenses
            });
            done();
        });
    });
});