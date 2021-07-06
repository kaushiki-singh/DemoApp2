import { ActionsObservable } from 'redux-observable';
import { isOfType } from 'typesafe-actions';
import { filter, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { catchError } from 'rxjs/internal/operators/catchError';
import { from, of } from 'rxjs';
import { IErrorActionData } from '../utils/error';
import {
    getUsersListAction,
    getUsersListSuccess,
    getUsersListFailure,
    UsersActionTypes,
} from '../actions/userAction';

const getUsersEpic = (action$: ActionsObservable<getUsersListAction>) =>
    action$.pipe(
        filter(isOfType(UsersActionTypes.GET_USERS_LIST_REQUEST)),
        mergeMap((action: getUsersListAction) => {
            console.log("in user epic");
            return from(axios.get('https://api.github.com/users')).pipe(
                map((response) => {
                    const userList = response.data;
                    return getUsersListSuccess({ userData: userList });
                }),
                catchError((error: IErrorActionData) => {
                    return of(getUsersListFailure({
                        errorCode: error.errorCode,
                        errorMessage: error.errorMessage,
                    }),
                    );
                }),
            );
        }),
    );
export default getUsersEpic;
