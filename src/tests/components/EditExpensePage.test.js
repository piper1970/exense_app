import {shallow} from 'enzyme';
import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import { removeExpense } from '../../actions/expenses';

describe('EditExpensePage', () => {

    let editExpense, removeExpense, history, wrapper;
    beforeEach(() => {
        editExpense = jest.fn();
        removeExpense = jest.fn();
        history = {
            push: jest.fn()
        };
        wrapper = shallow(<EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense}
            history={history}
            expense={expenses[0]}/>);
    });

    test('should render edit page', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should handle edit expense page', () => {
        const newExpense = {
            ...expenses[0],
            dscription: 'New description'
        };
        wrapper.find('ExpenseForm').prop('onSubmit')(newExpense);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(editExpense).toHaveBeenLastCalledWith(newExpense.id, newExpense);
    });

    test('should handle remove expense', () => {
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
    });
});