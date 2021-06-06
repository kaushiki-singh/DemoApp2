const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_FAIL = "GET_USER_FAIL";

export const userSuccess = (data) => ({
    
        type: GET_USER_SUCCESS,
        info: 'get the list of users on  github',
        payload: {
            request: {
              url: `/users/${user}/repos`
            }
          }
    
})

export const userFail = (data) => ({
    
        type: GET_USER_FAIL,
        info: ' Failed to get the list of users on  github',
        payload: {
            request: {
              url: `/users/${user}/repos`
            }
          }
    
})