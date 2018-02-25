export default (filteredExpenses) => {
    const amountTotaller = (total, currentAmount) => total + currentAmount;
    const amountMapper = (expense) => expense.amount;
    const expenseFilter = (expense) => typeof expense.amount !== 'undefined';

    return filteredExpenses.filter(expenseFilter)
        .map(amountMapper)
        .reduce(amountTotaller,0);
};