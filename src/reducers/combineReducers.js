import {combineReducers} from 'redux';
import repoReducer from './repoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    repo: repoReducer
});
export default rootReducer;