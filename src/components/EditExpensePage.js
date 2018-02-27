import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push('/');
    };

    render = () => {
        return( 
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    expense = {this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <div>
                    <button onClick={this.onClick}>
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToForm = (state, props) => {
    const expense = state.expenses.find((expense) => expense.id === props.match.params.id);
    return {
        expense
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        startRemoveExpense: (obj) => dispatch(startRemoveExpense(obj))
    };
};

export default connect(mapStateToForm, mapDispatchToProps)(EditExpensePage);