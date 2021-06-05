import {createStore} from 'redux';

import rootReducer from '../reducers/combineReducers';

const store = createStore(rootReducer);

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

// export default store;
