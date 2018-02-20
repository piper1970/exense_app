import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortByAmount,sortByDate} from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <div>
            <label htmlFor="filterTextBox">Add a text filter: </label>
            <input type="text" 
                value={props.filters.text} 
                name="filterTextBox" 
                placeholder="Add text here..."
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                }} />
        </div>
        <div>
            <label htmlFor = "sortByDropdown">Sort by: </label>
            <select
                value={props.filters.sortBy}
                onChange={(e) =>{
                    if(e.target.value === 'date'){
                        props.dispatch(sortByDate());
                    }else if(e.target.value === 'amount'){
                        props.dispatch(sortByAmount());
                    }
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    </div>
);

const connectMap = (state) => {
    if(true){
        return {
            filters:state.filters
        }
    }
};

export default connect(connectMap)(ExpenseListFilters);
