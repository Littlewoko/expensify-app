import moment from "moment"

export default [{
    id: '1',
    description: 'coffee',
    note: '',
    amount: 250,
    createdAt: 0
}, {
    id: '2',
    description: 'water',
    note: '',
    amount: 1000,
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
    id: '3',
    description: 'monster',
    note: '',
    amount: 125,
    createdAt: moment(0).add(4,'days').valueOf()
}]