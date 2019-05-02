import axios from 'axios';

import { ADD_COMMENT, FETCH_COMMENT, SIGN_IN } from 'action/types'


export function addComment(newComment) {
    return {
        type: ADD_COMMENT,
        payload: newComment
    }
}

export function fetchComments(){
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENT,
        payload: response
    }
}

export function signIn(isSignedIn){
    return {
        type: SIGN_IN,
        payload: isSignedIn
    }
}

