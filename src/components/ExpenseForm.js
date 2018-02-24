import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import  {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.expense?props.expense.id:undefined,
            description: props.expense? props.expense.description: '',
            note: props.expense? props.expense.note: '',
            amount: props.expense? (props.expense.amount/100).toString(): '',
            createdAt: props.expense? moment(props.expense.createdAt): moment(),
            calendarFocused: false,
            error:''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        if(this.state.description !== description){
            this.setState(() => ({description}));
        }
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        if(this.state.note !== note){
            this.setState(() => ({note}));
        }
    };

    amountChange = (e) => {
        const amount = e.target.value;
        const pattern = /^\d+(\.\d{0,2})?$/;
        if(!amount || amount.match(pattern)){
            this.setState(() => ({amount}));
        }
    };
    onDateChanged = (createdAt) => {
        if(!!createdAt){
            this.setState(() => ({createdAt}));
        }
    };
    onCalendarFocusChange = ({focused:calendarFocused}) => {
        this.setState(() => ({calendarFocused}));
    };

    onSubmitHandler = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            const error = 'Please provide description and amount';
            this.setState(() => ({error}));
        }else{
            const error = '';
            this.setState(() => ({error}));
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt:this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    {!!this.state.error && <h3>{this.state.error}</h3>}
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input 
                            type="text" 
                            name="description" 
                            placeholder="Description" 
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                            autoFocus />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount: </label>
                        <input 
                            name="amount" 
                            type="text" 
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.amountChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="datePicker">Choose a date: </label>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChanged}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onCalendarFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                    <div>
                        <label htmlFor="notes">Notes: </label>
                        <textarea 
                            name="notes"
                            placeholder="Add an optional note for your expense..."
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        />
                    </div>
                    <div>
                        <button>Expense</button>
                    </div>
                </form>
            </div>
        );  
    }
}

