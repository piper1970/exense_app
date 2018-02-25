import {shallow} from 'enzyme';
import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';

describe('ExpenseDashboard', () => {
    test('should display expense list and totals line with filters', () => {
        const wrapper = shallow(<ExpenseDashboardPage expenses={expenses} filters={filters}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Should display expense list without totals line if no expenses', () => {
        const wrapper = shallow(<ExpenseDashboardPage expenses={[]} filters={filters}/>);
        expect(wrapper).toMatchSnapshot();
    })
});