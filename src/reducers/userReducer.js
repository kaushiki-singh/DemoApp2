import{
    GET_USERS_LIST_REQUEST,
    GET_USERS_LIST_SUCCESS,
    GET_USERS_LIST_FAILURE
} from '../actions/userAction';

const initialState = {
    isLoading: false,
    loaded: false,
    data: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_USERS_LIST_REQUEST':
        return {
            ...state,
            isLoading: true,
            loaded:false,
            data: null,
            error: null,
        }
        case 'GET_USERS_LIST_SUCCESS':
            return {
                ...state,
                isLoading: false,
                loaded: true,
                data: action.data,
                error: null,
            }
            case 'GET_USERS_LIST_FAIURE':
                return {
                    ...state,
                    isLoading: false,
                    loaded: true,
                    data: null,
                    error: action.data,
                }
                default:
                    return state
    }
}
export default userReducer;

// const userReducer = (state = { users: [] }, action) => {
//     switch(action.type){
//         case GET_USER_SUCCESS : 
//         return { ...state, users: action}
//     }
// }