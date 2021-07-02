import { combineEpics } from 'redux-observable';
import getUsersEpic from '../epics/userEpic';
import getReposEpic from '../epics/repoEpic';
import getLanguageEpic from '../epics/lanuageEpic';

export const rootEpic = combineEpics(getUsersEpic, getReposEpic, getLanguageEpic);