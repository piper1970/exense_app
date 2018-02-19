import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';

const ExpenseListFilters = (props) => (
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
);

const connectMap = (state) => {
    if(true){
        return {
            filters:state.filters
        }
    }
};

export default connect(connectMap)(ExpenseListFilters);
