import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import selectedExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) =>{
    const expenseWord = props.expensesCount === 1?'expense':'expenses';
    const expenseAmount = numeral(props.expensesTotal/100).format('$0,0.00');
    return(
        <div>
            <p>Viewing {props.expensesCount} {expenseWord} totalling {expenseAmount}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    const expensesCount = visibleExpenses.length;
    const expensesTotal = selectedExpensesTotal(visibleExpenses);
    return {
        expensesCount,
        expensesTotal
    };
}
export default connect(mapStateToProps)(ExpensesSummary);
