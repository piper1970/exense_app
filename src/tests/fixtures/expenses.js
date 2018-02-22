import moment from 'moment';

const expenses = [{
    id:'1',
    description: 'Gum',
    note: 'note',
    amount: 195,
    createdAt: moment(0).valueOf()
    },
    {
        id:'2',
        description: 'Rent',
        note: 'note 2',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },        {
        id:'3',
        description: 'Credit Card',
        note: 'note 3',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

export default expenses;