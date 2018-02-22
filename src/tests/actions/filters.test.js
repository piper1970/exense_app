import moment from 'moment';
import {
    setTextFilter, 
    sortByDate, 
    sortByAmount, 
    setStartDate, 
    setEndDate
}  from '../../actions/filters';

describe('setTextFilter', () => {
    // setTextFilter with text
    test('should set text filter action with given text', () => {
        const text = 'test';
        const action = setTextFilter(text);
        expect(action).toEqual({
            type:'SET_TEXT_FILTER',
            text
        });
    });
    // setTextFilter with no text
    test('should reset text filter action with not text', () => {
        const action = setTextFilter();
        expect(action).toEqual({
            type:'SET_TEXT_FILTER',
            text: ''
        });
    });
});

describe('sortByDate', () => {
    test('should generate sort-by-date action', () => {
        expect(sortByDate()).toEqual({
            type:'SORT_BY_DATE',
            sortBy: 'date'
        });
    });
});

describe('sortByAmount', () => {
    test('should generate sort-by-amount action', () => {
        expect(sortByAmount()).toEqual({
            type:'SORT_BY_AMOUNT',
            sortBy: 'amount'
        });
    });
});

describe('setStartDate', () => {
    test('should generate set start date action object', () => {
        const action = setStartDate(moment(0));
        expect(action).toEqual({
            type:'SET_START_DATE',
            startDate:moment(0)
        });
    });
});

describe('setEndDate', () => {
    test('should generate set end date action object', () => {
        const action = setEndDate(moment(0));
        expect(action).toEqual({
            type:'SET_END_DATE',
            endDate:moment(0)
        });
    });

});

