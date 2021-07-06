import { ActionsObservable } from 'redux-observable';
import { isOfType } from 'typesafe-actions';
import { filter, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { catchError } from 'rxjs/internal/operators/catchError';
import { IErrorActionData } from '../utils/error';
import {
    getLanguageListAction,
    getLanguageListSuccess,
    getLanguageListFailure,
    LanguageActionTypes,
} from '../actions/languageAction';
import { from, of } from 'rxjs';

const getLanguageEpic = (action$: ActionsObservable<getLanguageListAction>) =>
    action$.pipe(
        filter(isOfType(LanguageActionTypes.GET_LANGUAGE_LIST_REQUEST)),
        mergeMap((action: getLanguageListAction) => {
            return from(axios.get(`https://api.github.com/repos/${action.payload[0]}/${action.payload[1]}/languages`)).pipe(
                map((response) => {
                    const languageList = response.data;
                    return getLanguageListSuccess({ languageData: Object.keys(languageList), repoName: action.payload[1] });
                }),
                catchError((error: IErrorActionData) => {
                    return of(getLanguageListFailure({
                        errorCode: error.errorCode,
                        errorMessage: error.errorMessage,
                    }),
                    );
                }),
            );
        }),
    );
export default getLanguageEpic;