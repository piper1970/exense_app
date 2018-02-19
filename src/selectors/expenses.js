const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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