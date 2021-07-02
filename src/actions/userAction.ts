import { createAction, ActionType } from 'typesafe-actions';
import { UserData } from '../utils/userData';

export enum UsersActionTypes {
  GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST',
  GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS',
  GET_USERS_LIST_FAILURE = 'GET_USERS_LIST_FAILURE'
}

interface IFetchUsersSuccessActionData {
  userData: Array<UserData>;
}

export interface IErrorActionData {
  errorCode: number;
  errorMessage: string;
}

export const getUsersListRequest = createAction(UsersActionTypes.GET_USERS_LIST_REQUEST)();
export const getUsersListSuccess = createAction(UsersActionTypes.GET_USERS_LIST_SUCCESS)<IFetchUsersSuccessActionData>();
export const getUsersListFailure = createAction(UsersActionTypes.GET_USERS_LIST_FAILURE)<IErrorActionData>();

export type getUsersListAction = ActionType<typeof getUsersListRequest>;
type getUsersListSuccessAction = ActionType<typeof getUsersListSuccess>;
type getUsersListFailureAcion = ActionType<typeof getUsersListFailure>;

export type UsersListGetActions =
  | getUsersListAction
  | getUsersListSuccessAction
  | getUsersListFailureAcion;
