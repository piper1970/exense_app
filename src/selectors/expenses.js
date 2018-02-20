import moment from 'moment';

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment, 'day'): true
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        const textMatch = typeof text !== 'string' || 
            typeof expense.description !== 'string' ||
            expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {

        // desc order
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt;
        }else{
            return a.amount < b.amount;
        }
    });
};

export default getVisibleExpenses;