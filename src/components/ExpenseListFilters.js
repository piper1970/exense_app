import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortByAmount,sortByDate, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component{
    
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = ((calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    })

    render(){
        return (
            <div>
                <div>
                    <input type="text" 
                        value={this.props.filters.text} 
                        name="filterTextBox" 
                        placeholder="Add text filter here..."
                        onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }} />
                    <select
                        value={this.props.filters.sortBy}
                        onChange={(e) =>{
                            if(e.target.value === 'date'){
                                this.props.dispatch(sortByDate());
                            }else if(e.target.value === 'amount'){
                                this.props.dispatch(sortByAmount());
                            }
                        }}
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                </div>
            </div>
        );
    }
}

const connectMap = (state) => {
    if(true){
        return {
            filters:state.filters
        }
    }
};

export default connect(connectMap)(ExpenseListFilters);
