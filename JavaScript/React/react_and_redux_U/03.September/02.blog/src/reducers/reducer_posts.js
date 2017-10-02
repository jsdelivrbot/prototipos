import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'

export default function (state = {}, action) {
    if(action.type === FETCH_POSTS) {
        console.log(action.payload.data)
        return _.mapKeys(action.payload.data, 'id');
    }
    else if(action.type === FETCH_POST){
        const post = action.payload.data;
        const newState = { state };
        newState[post.id] = post;
        return newState;
    }
    else if(action.type === DELETE_POST) {
        return _.omit(state, action.payload)
    }
    else {
        return state;
    }
}