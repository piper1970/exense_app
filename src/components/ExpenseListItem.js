import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = (props) => {
    const {id, description, amount, note, createdAt, index} = props;

    return(
        <div>
            {isTextPrintable(description) && isValidId(id) && 
                <Link to={`/edit/${id}`}><h3>{description}</h3></Link>}
            {isAmountPrintable(amount) && <p>Amount: {numeral(amount/100).format('$0,0.00')}</p>}
            {isTextPrintable(note) && <p>Notes: {note}</p>}
            {isDatePrintable(createdAt) && 
                <p>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>}
        </div>
            
        );
};


const isTextPrintable = (text) =>{
    return !!text && 
        typeof text === 'string' &&
        text.trim() !== 0;
};

const isDatePrintable = (date) => {
    return typeof date === 'number';
};

const isAmountPrintable = (amount) => {
    return !!amount &&
        typeof amount === 'number' &&
        amount !== 0;
}

const isValidId = (id) => {
    return !!id;
}

export default ExpenseListItem;