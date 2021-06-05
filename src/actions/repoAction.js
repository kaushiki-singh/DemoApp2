const GET_REPOS = 'GET_REPOS';

export const repoAction = () => {
   return  {
       type: GET_REPOS,
       info: 'Get all the user specific repos'
    }
}