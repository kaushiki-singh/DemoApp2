import { combineReducers } from 'redux';
import RepoReducer from '../reducers/RepoReducer';
import UserReducer from '../reducers/UserReducer';
import Languagereducer from '../reducers/LanguageReducer';

export const rootReducer = combineReducers({
    user: UserReducer,
    repo: RepoReducer,
    language: Languagereducer,
});

