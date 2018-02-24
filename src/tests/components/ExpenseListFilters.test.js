import {shallow} from 'enzyme';
import React from 'react';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
describe('ExpenseListFilters', () => {
    beforeEach(() => {
        setTextFilter = jest.fn();
        sortByDate = jest.fn();
        sortByAmount = jest.fn();
        setStartDate = jest.fn();
        setEndDate = jest.fn();

        wrapper = shallow(<ExpenseListFilters 
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            filters={filters}
        />);
    });

    test('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render with alt data correctly', () => {
        wrapper.setProps({
            filters: altFilters
        });
        expect(wrapper).toMatchSnapshot();
    });


    test('should handle text change', () => {
        const expected = 'New Text';
        const e = {
            target:{
                value:expected
            }
        };
        wrapper.find('input').simulate('change', e);
        expect(setTextFilter).toHaveBeenLastCalledWith(expected);
    });

    test('should sort by date', () => {
        const expected = 'date';
        const e = {
            target:{
                value:expected
            }
        };
        wrapper.setProps({
            filters:altFilters      
        });
        wrapper.find('select').first().simulate('change', e);
        expect(sortByDate).toBeCalled();
    });

    test('should sort by amount', () => {
        const expected = 'amount';
        const e = {
            target:{
                value:expected
            }
        };
        wrapper.find('select').first().simulate('change',e);
        expect(sortByAmount).toBeCalled();
    });

    test('should handle date changes', () => {
        const startDate = moment().subtract(1, 'days');
        const endDate = startDate.add(3, 'days');
        const range = {startDate, endDate};
        wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(range);
        expect(setStartDate).toHaveBeenLastCalledWith(startDate);
        expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    });

    test('should handle date focus changes', () => {
        const newFocusedState = 'startDate';
        expect(wrapper.state('calendarFocused')).toBeFalsy();
        wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(newFocusedState);
        expect(wrapper.state('calendarFocused')).toBe('startDate');     
    });
});