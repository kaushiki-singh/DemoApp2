import { ActionsObservable } from 'redux-observable';
import { isOfType } from 'typesafe-actions';
import { filter, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { catchError } from 'rxjs/internal/operators/catchError';
import { IErrorActionData } from '../utils/error';
import {
    getReposListAction,
    getReposListSuccess,
    getReposListFailure,
    ReposActionTypes,
} from '../actions/repoAction';
import { from, of } from 'rxjs';

const getReposEpic = (action$: ActionsObservable<getReposListAction>) =>
    action$.pipe(
        filter(isOfType(ReposActionTypes.GET_REPOS_LIST_REQUEST)),
        mergeMap((action: getReposListAction) => {
            return from(axios.get(`https://api.github.com/users/${action.payload}/repos`)).pipe(
                map((response) => {
                    const repoList = response.data;
                    return getReposListSuccess({ repoData: repoList });
                }),
                catchError((error: IErrorActionData) => {
                    return of(getReposListFailure({
                        errorCode: error.errorCode,
                        errorMessage: error.errorMessage,
                    }),
                    );
                }),
            );
        }),
    );
export default getReposEpic;