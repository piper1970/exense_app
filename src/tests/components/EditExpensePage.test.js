import {shallow} from 'enzyme';
import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

describe('EditExpensePage', () => {

    let startEditExpense, startRemoveExpense, history, wrapper;
    beforeEach(() => {
        startEditExpense = jest.fn();
        startRemoveExpense = jest.fn();
        history = {
            push: jest.fn()
        };
        wrapper = shallow(<EditExpensePage 
            startEditExpense={startEditExpense} 
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
        expect(startEditExpense).toHaveBeenLastCalledWith(newExpense.id, newExpense);
    });

    test('should handle remove expense', () => {
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
    });
});