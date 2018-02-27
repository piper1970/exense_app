import {shallow} from 'enzyme';
import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import { removeExpense } from '../../actions/expenses';

describe('EditExpensePage', () => {

    let editExpense, startRemoveExpense, history, wrapper;
    beforeEach(() => {
        editExpense = jest.fn();
        startRemoveExpense = jest.fn();
        history = {
            push: jest.fn()
        };
        wrapper = shallow(<EditExpensePage 
            editExpense={editExpense} 
            startRemoveExpense={startRemoveExpense}
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
        expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
    });
});