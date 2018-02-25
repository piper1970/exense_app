import {shallow} from 'enzyme';
import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';

describe('ExpensesSummary', () => {
    test('no filtered expenses exist', () => {
        
        const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('filtered expenses exist', () => {
        const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={54.95}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
