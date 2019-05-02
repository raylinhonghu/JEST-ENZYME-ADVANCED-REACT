import { combineReducers } from 'redux';
import commentsReducer from 'reducer/commentsReducer';
import signInReducer from 'reducer/signInReducer';

export default combineReducers({
    comments: commentsReducer,
    signIn: signInReducer
})