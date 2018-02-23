import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortByAmount,sortByDate, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component{
    
    state = {
        calendarFocused: null
    };

    textFilterOnChange = (e) => {
        this.props.setTextFilter(e.target.value)
    };

    dateSelectOnChange = (e) => {
        const value = e.target.value;
        if(value === 'date'){
            this.props.sortByDate();
        }else{
            this.props.sortByAmount();
        }
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
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
                        onChange={this.textFilterOnChange}
                    />
                    <select
                        value={this.props.filters.sortBy}
                        onChange={this.dateSelectOnChange}
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                        <DateRangePicker 
                            startDateId={'startDate'}
                            endDateId={'endDate'}
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

const connectDispatchToProp = (dispatch, prop) => {

    return {
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setTextFilter: (value) => dispatch(setTextFilter(value)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    };
};

export default connect(connectMap, connectDispatchToProp)(ExpenseListFilters);
