import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

describe('expensesReducer', () => {

    describe('@@INIT', () => {
        test('should set default state: @@INIT', () => {
            const state = expensesReducer(undefined,{
                type:'@@INIT'
            });
            expect(state).toEqual([]);
        });
    });

    describe('ADD_EXPENSE', () => {
        test('should add expense to state', () => {
            const expense = {
                id:'99',
                description: 'Swim',
                note: '',
                amount: 2799,
                createdAt: moment(0).valueOf()
            };
            const action = {
                type:'ADD_EXPENSE',
                expense
            };
            const state = expensesReducer(expenses, action);
            const expectedResults = [
                ...expenses,
                expense
            ];
            expect(state).toEqual(expectedResults);
        });
    });

    describe('REMOVE_EXPENSE', () => {
        test('should remove a valid id', () => {
            const action = {
                type:'REMOVE_EXPENSE',
                id:expenses[1].id
            };
            const state = expensesReducer(expenses, action);
            expect(state).toEqual([
                expenses[0],
                expenses[2]
            ]);
        });
        test('should try to remove an invalid id', () => {
            const action = {
                type:'REMOVE_EXPENSE',
                id:'-1'
            };
            const state = expensesReducer(expenses, action);
            expect(state).toEqual(expenses);
        });
    });

    describe('EDIT_EXPENSE', () => {
        const note = 'Was a great day';
        test('should edit an expense', () => {
            const updates = {
                note
            };
            const action = {
                type:'EDIT_EXPENSE',
                id:expenses[0].id,
                updates
            };
            const state = expensesReducer(expenses, action);
            const expectedResults = [
                {...expenses[0], note},
                expenses[1],
                expenses[2]
            ];
            expect(state).toEqual(expectedResults);
        });
        test('should not edit an expense if expense not found', () => {
            const note = 'Was an awfult day';
                const updates = {
                    note
                };
                const action = {
                    type:'EDIT_EXPENSE',
                    id:'-1',
                    updates
                };
                const state = expensesReducer(expenses, action);
                expect(state).toEqual(expenses);
        });
    });
});

describe('SET_EXPENSES', () => {
    test('should set expenses', () => {
        const action = {
            type:'SET_EXPENSES',
            expenses:[expenses[0]]
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([expenses[0]]);
    });
});