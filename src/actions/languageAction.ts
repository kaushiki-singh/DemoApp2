import { createAction, ActionType } from 'typesafe-actions';
import { IErrorActionData } from '../utils/error';
import { LanguageData } from '../utils/languageData';

export enum LanguageActionTypes {
    GET_LANGUAGE_LIST_REQUEST = 'GET_LANGUAGE_LIST_REQUEST',
    GET_LANGUAGE_LIST_SUCCESS = 'GET_LANGUAGE_LIST_SUCCESS',
    GET_LANGUAGE_LIST_FAILURE = 'GET_LANGUAGE_LIST_FAILURE'
}

interface IFetchLanguageListActionData {
    loginName: string;
    repoName: string;
}

interface IFetchLanguageSuccessActionData {
    languageData: LanguageData;
}

export const getLanguageListRequest = createAction(LanguageActionTypes.GET_LANGUAGE_LIST_REQUEST)<IFetchLanguageListActionData>();
export const getLanguageListSuccess = createAction(LanguageActionTypes.GET_LANGUAGE_LIST_SUCCESS)<IFetchLanguageSuccessActionData>();
export const getLanguageListFailure = createAction(LanguageActionTypes.GET_LANGUAGE_LIST_FAILURE)<IErrorActionData>();

export type getLanguageListAction = ActionType<typeof getLanguageListRequest>;
export type getLanguageListSuccessAction = ActionType<typeof getLanguageListSuccess>;
export type getLanguageListFailureAction = ActionType<typeof getLanguageListFailure>;

export type LanguageListGetActions =
    | getLanguageListAction
    | getLanguageListSuccessAction
    | getLanguageListFailureAction;