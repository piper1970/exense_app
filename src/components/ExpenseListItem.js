import React from 'react';
import {connect} from 'react-redux';
import  {removeExpense} from '../actions/expenses';

const ExpenseListItem = (props) => {
    const {id, description, amount, note, createdAt, index} = props;

    console.log(`${description}, ${amount}, ${note}, ${createdAt}, ${index}`);
    return(
        <div>
            {isTextPrintable(description) &&
                <h3>{description}</h3>}
            {isAmountPrintable(amount) && <p>Amount: ${(amount/100).toFixed(2)}</p>}
            {isTextPrintable(note) && <p>Notes: {note}</p>}
            {isDatePrintable(createdAt) && 
                <p>Created at: {createdAt}</p>}

            <button onClick={() => {
                props.dispatch(removeExpense({id}))
            }}>Remove</button>
        </div>
            
        );
};


const isTextPrintable = (text) =>{
    return !!text && 
        typeof text === 'string' &&
        text.trim() !== 0;
};

const isDatePrintable = (date) => {
    return !!date &&
        typeof date === 'number' &&
        date !== 0;
};

const isAmountPrintable = (amount) => {
    return !!amount &&
        typeof amount === 'number' &&
        amount !== 0;
}

export default connect()(ExpenseListItem);