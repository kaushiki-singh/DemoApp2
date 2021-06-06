const initialState = {
    isLoading: false,
    loaded: false,
    data: null,
    error: null
}

const repoReducer = (state = initialState, action) => {
    console.log("hi"+action)
    switch(action.type){
        case 'GET_REPOS_LIST_REQUEST':
        return {
            ...state,
            isLoading: true,
            loaded:false,
            data: null,
            error: null,
        }
        case 'GET_REPOS_LIST_SUCCESS':
            return {
                ...state,
                isLoading: false,
                loaded: true,
                data: action.data,
                error: null,
            }
            case 'GET_REPOS_LIST_FAIURE':
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
export default repoReducer;