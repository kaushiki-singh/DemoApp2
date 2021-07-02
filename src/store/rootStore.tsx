import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './rootEpic';
import { rootReducer } from './combineReducers';

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
    const middlewares = [epicMiddleware];
    const enhancer = compose(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);
    return store;
}

const RootStore = configureStore();
epicMiddleware.run(rootEpic);


export default RootStore;
