import _ from 'lodash'
import { FETCH_POSTS } from '../actions'

export default function (state = {}, action) {
    if(action.type === FETCH_POSTS) {
        console.log(action.payload.data)
        return _.mapKeys(action.payload.data, 'id');
    }
    else {
        return state;
    }
}