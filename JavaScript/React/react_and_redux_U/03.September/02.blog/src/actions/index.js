import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=uriel621';
export function fetch_posts () {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}