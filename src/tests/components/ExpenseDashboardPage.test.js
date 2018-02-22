import {shallow} from 'enzyme';
import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

describe('ExpenseDashboard', () => {
    test('should display expense list with filters', () => {
        const wrapper = shallow(<ExpenseDashboardPage />);
        expect(wrapper).toMatchSnapshot();
    });
});