const setTextFilter = (text = '') => (
    {
        type:'SET_TEXT_FILTER',
        text
    }
);

const sortByDate = () => (
    {
        type:'SORT_BY_DATE',
        sortBy: 'date'
    }
);

const sortByAmount = () => (
    {
        type:'SORT_BY_AMOUNT',
        sortBy: 'amount'
    }
);

const setStartDate = (startDate) => (
    {
        type:'SET_START_DATE',
        startDate
    }
);

const setEndDate = (endDate) => (
    {
        type:'SET_END_DATE',
        endDate
    }
);

export {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate};