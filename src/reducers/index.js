import { combineReducers } from 'redux'
import { reducer as formReducers } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducers,
    streams: streamReducer
});