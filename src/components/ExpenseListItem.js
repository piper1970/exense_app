import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment'

const ExpenseListItem = (props) => {
    const {id, description, amount, note, createdAt, index} = props;

    console.log(`${description}, ${amount}, ${note}, ${createdAt}, ${index}`);
    return(
        <div>
            {isTextPrintable(description) &&
                <Link to={`/edit/${id}`}><h3>{description}</h3></Link>}
            {isAmountPrintable(amount) && <p>Amount: ${(amount/100).toFixed(2)}</p>}
            {isTextPrintable(note) && <p>Notes: {note}</p>}
            {isDatePrintable(createdAt) && 
                <p>Created at: {moment(createdAt).format('dddd, MMMM Do, YYYY')}</p>}
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

export default ExpenseListItem;