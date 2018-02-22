import filtersReducer from '../../reducers/filters';
import moment from 'moment';

describe('filter reducers', () => {

    test('should setup default filter values', () => {
        const state = filtersReducer(undefined, {
            type: '@@INIT'
        });
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('should adjust state have text filter', () => {
        const text = 'text';
        const state = filtersReducer(undefined, {
            type: 'SET_TEXT_FILTER',
            text
        });
        expect(state).toEqual({
            text,
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('should adjust state to sort by amount filter', () => {
        const state = filtersReducer(undefined, {
            type:'SORT_BY_AMOUNT'
        });
        expect(state).toEqual({
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('should adjust state to sort by date filter', () => {
        
        // since default sort by is date, need to first change
        const currentState = {
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        };

        const state = filtersReducer(currentState, {
            type:'SORT_BY_DATE'
        })
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('should set start date filter', () => {
        const startDate = moment(0).add(3,'months');
        const state = filtersReducer(undefined, {
            type: 'SET_START_DATE',
            startDate
        });
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate,
            endDate: moment().endOf('month')
        });
    });

    test('should set end date filter', () => {
                const endDate = moment(0).add(3,'months');
        const state = filtersReducer(undefined, {
            type: 'SET_END_DATE',
            endDate
        });
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate
        });
    });
});