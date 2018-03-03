import React from 'react';
import numeral from 'numeral';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import selectedExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) =>{
    const expenseWord = props.expensesCount === 1?'expense':'expenses';
    const expenseAmount = numeral(props.expensesTotal/100).format('$0,0.00');
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{expenseAmount}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/add">Add Expense</Link>
                </div>
            </div>
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
