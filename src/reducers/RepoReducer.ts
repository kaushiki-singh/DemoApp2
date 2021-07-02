import { Reducer } from 'redux';
import { IErrorActionData } from '../utils/error';
import { RepoData } from '../utils/repoData';
import {
    ReposActionTypes, ReposListGetActions
} from '../actions/repoAction';

interface IRepoState {
    isLoading: boolean;
    data: Array<RepoData>;
    error: IErrorActionData;
}
const initialState = {
    isLoading: false,
    data: [],
    error: null
} as IRepoState

const RepoReducer: Reducer<IRepoState, ReposListGetActions> = (state = initialState, action: ReposListGetActions) => {
    switch (action.type) {
        case ReposActionTypes.GET_REPOS_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: null,
                error: null,
            }
        case ReposActionTypes.GET_REPOS_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.repoData,
                error: null,
            }
        case ReposActionTypes.GET_REPOS_LIST_FAILURE:
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
export default RepoReducer;