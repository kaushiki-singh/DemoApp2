import { Reducer } from 'redux';
import { IErrorActionData } from '../utils/error';
import { UserData } from '../utils/userData';

import {
    UsersActionTypes, UsersListGetActions
} from '../actions/userAction';

interface IUserState {
    isLoading: boolean;
    data: Array<UserData>;
    error: IErrorActionData;
}
const initialState = {
    isLoading: false,
    data: [],
    error: null,
} as IUserState;

const UserReducer: Reducer<IUserState, UsersListGetActions> = (state = initialState, action: UsersListGetActions) => {
    switch (action.type) {
        case UsersActionTypes.GET_USERS_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: null,
                error: null,
            }
        case UsersActionTypes.GET_USERS_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.userData,
                error: undefined,
            }
        case UsersActionTypes.GET_USERS_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: null,
                error: {
                    errorCode: action.payload.errorCode ? action.payload.errorCode : 500,
                    errorMessage: action.payload.errorMessage ? action.payload.errorMessage : "Something went wrong",
                }
            }
        default:
            return state
    }
}
export default UserReducer;