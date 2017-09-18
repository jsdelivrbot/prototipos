import { combineReducers } from 'redux';

import first_reducer from './first_reducer.js';
// import second_reducer from './2nd_reducer';

const root_reducer = combineReducers({
    // first_reducer_props: first_reducer,
    // second_reducer_props: second_reducer 
    first_reducer_props: first_reducer
})

export default root_reducer