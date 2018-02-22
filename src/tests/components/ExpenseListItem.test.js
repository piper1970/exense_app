import {shallow} from 'enzyme';
import React from 'react';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import moment from 'moment';
import expenses from '../fixtures/expenses';

const expense = expenses[0];

describe('ExpenseListItem', () => {

    test('should render ExpenseListItem when all props valid', () => {
        const wrapper = shallow(<ExpenseListItem 
            id={expense.id} 
            description={expense.description}
            amount={expense.amount}
            note={expense.note}
            createdAt={expense.createdAt}
            index={0}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render expenselistitem without createdAt if not defined', () => {
        const wrapper = shallow(<ExpenseListItem 
            id={expense.id} 
            description={expense.description}
            amount={expense.amount}
            note={expense.note}
            index={0}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render ExpenseListItem without note if not defined', () => {
        const wrapper = shallow(<ExpenseListItem 
            id={expense.id} 
            description={expense.description}
            amount={expense.amount}
            createdAt={expense.createdAt}
            index={0}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render ExpenseListItem without amount if not defined', () => {
        const wrapper = shallow(<ExpenseListItem 
            id={expense.id} 
            description={expense.description}
            note={expense.note}
            createdAt={expense.createdAt}
            index={0}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render ExpenseListItem without link if description not defined', () => {
        const wrapper = shallow(<ExpenseListItem 
            id={expense.id}
            amount={expense.amount}
            note={expense.note}
            createdAt={expense.createdAt}
            index={0}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render ExpenseListItem without link if id not defined', () => {
        const wrapper = shallow(<ExpenseListItem
            description={expense.description}
            amount={expense.amount}
            note={expense.note}
            createdAt={expense.createdAt}
            index={0}
        />);
        expect(wrapper).toMatchSnapshot();
    });
});