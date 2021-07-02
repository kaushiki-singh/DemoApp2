import { createAction, ActionType } from 'typesafe-actions';
import { RepoData } from '../utils/RepoData';

export enum ReposActionTypes  {
 GET_REPOS_LIST_REQUEST = 'GET_REPOS_LIST_REQUEST',
 GET_REPOS_LIST_SUCCESS = 'GET_REPOS_LIST_SUCCESS',
 GET_REPOS_LIST_FAILURE = 'GET_REPOS_LIST_FAILURE'
}

 interface IFetchReposListActionData {
   login: string;
}

interface IFetchReposSuccessActionData {
  repoData: Array<RepoData>;
}

export interface IErrorActionData {
  errorCode: number;
  errorMessage: string;
}

export const getReposListRequest = createAction(ReposActionTypes.GET_REPOS_LIST_REQUEST)<IFetchReposListActionData>();
export const getReposListSuccess = createAction(ReposActionTypes.GET_REPOS_LIST_SUCCESS)<IFetchReposSuccessActionData>();
export const getReposListFailure = createAction(ReposActionTypes.GET_REPOS_LIST_FAILURE)<IErrorActionData>();

export type getReposListAction = ActionType<typeof getReposListRequest>;
type getReposListSuccessAction = ActionType<typeof getReposListSuccess>;
type getReposListFailureAction = ActionType<typeof getReposListFailure>;

export type ReposListGetActions = 
| getReposListAction
| getReposListSuccessAction
| getReposListFailureAction;

