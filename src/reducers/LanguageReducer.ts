import { Reducer } from 'redux';
import { IErrorActionData } from '../utils/error';
import { LanguageData } from '../utils/languageData';
import { LanguageListGetActions, LanguageActionTypes } from '../actions/languageAction';

interface ILanguageState {
    isLoading: boolean;
    data: LanguageData;
    error: IErrorActionData;
}

const initialState = {
    isLoading: false,
    data: null,
    error: null
} as ILanguageState

const Languagereducer: Reducer<ILanguageState, LanguageListGetActions> = (state = initialState, action: LanguageListGetActions) => {
    switch (action.type) {
        case LanguageActionTypes.GET_LANGUAGE_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: null,
                error: null,
            }
        case LanguageActionTypes.GET_LANGUAGE_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.languageData,
                error: null,
            }
        case LanguageActionTypes.GET_LANGUAGE_LIST_FAILURE:
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
export default Languagereducer;