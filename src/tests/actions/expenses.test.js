import {addExpense, editExpense, removeExpense}  from '../../actions/expenses';

describe('addExpense', () => {

    test('should add expense with given data', () => {
        
        const expense = {
            description: 'description',
            note: 'note', 
            amount:999, 
            createdAt: 9999
        }
        const expectedResult = {
            type:'ADD_EXPENSE',
            expense:{
                ...expense,
                id: expect.any(String)
            }
        };
        
        const result = addExpense(expense);
    
        expect(result).toEqual(expectedResult);
    });

    test('should add expense with default data', () => {
    
        const expectedResult = {
            type:'ADD_EXPENSE',
            expense:{
                description: '',
                note: '', 
                amount:0, 
                createdAt: 0,
                id: expect.any(String)
            }
        };
        const result = addExpense();
    
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
});