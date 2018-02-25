import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('expensesTotal', () => {
    test('should return zero if no expenses', () => {
        const result = expensesTotal([]);
        expect(result).toBe(0);
    });

    test('should correctly add up a single expense', () => {
        const result = expensesTotal([expenses[0]]);
        expect(result).toBe(195);
    });

    test('should correctly add up multiple expenses', () => {
        const result = expensesTotal(expenses);
        expect(result).toBe(114195);
    });
});