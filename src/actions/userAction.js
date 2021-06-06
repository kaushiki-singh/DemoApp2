const GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST'
const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS'
const GET_USERS_LIST_FAILURE = 'GET_USERS_LIST_FAILURE'

const getUsersListRequest = (data) => ({
  type: GET_USERS_LIST_REQUEST,
  data
})

const getUsersListSuccess = (data) => ({
  type: GET_USERS_LIST_SUCCESS,
  data
})

const getUsersListFailure = (data) => ({
  type: GET_USERS_LIST_FAILURE,
  data
})

// const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
// const GET_REPOS_FAIL = 'GET_REPOS_FAIL';

// export const repoSuccess = () => {
//    return  {
//        type: GET_REPOS_SUCCESS,
//        info: 'Get all the user specific repos'
//     }
// }

// export const repoFail = () => {
//     return  {
//         type: GET_REPOS_FAIL,
//         info: 'Failed to Get all the user specific repos'
//      }
//  }