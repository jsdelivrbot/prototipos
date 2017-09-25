import { combineReducers } from 'redux';
import { reducer as form_reducer } from 'redux-form';
import Posts_Reducer from './reducer_posts';

const root_reducer = combineReducers({
    posts: Posts_Reducer,
    form: form_reducer
})

export default root_reducer