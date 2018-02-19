import {createStore} from 'redux';

// Actiion generator
const incrementCount = ({incrementBy = 1} = {}) => (
    {
        type:'INCREMENT',
        incrementBy
    }
);

const decrementCount = ({decrementBy = 1} = {}) => (
    {
        type:'DECREMENT',
        decrementBy
    }
);

const setCount = ({count}) => (
    {
        type:'SET',
        count
    }
);

const resetCount = () => (
    {
        type:'RESET'
    }
);

// Reducers
    // Reducers are pure functions -- they don't affect outer state or are 
    // affected by state outside of parameters
const countReducer = (state = { count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
        
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
    console.log('running');
    return state;
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(decrementCount());

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(incrementCount());

store.dispatch(setCount({count:27}));

unsubscribe();

store.dispatch(incrementCount({incrementBy: 6}));

console.log (`Value of count after last change is ${store.getState().count}`)
