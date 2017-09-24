import { combineReducers } from 'redux';

import Posts_Reducer from './reducer_posts';
// import second_reducer from './2nd_reducer';

const root_reducer = combineReducers({
    posts: Posts_Reducer
})

export default root_reducer