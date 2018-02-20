import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return( 
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm
                expense = {props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <div>
                <button onClick={ () => {
                    props.dispatch(removeExpense({id:props.expense.id}));
                    props.history.push('/');
                    }
                }>Remove</button>
            </div>
        </div>
    );
};

const mapStateToForm = (state, props) => {
    const expense = state.expenses.find((expense) => expense.id === props.match.params.id);
    return {
        expense
    }
}
export default connect(mapStateToForm)(EditExpensePage);