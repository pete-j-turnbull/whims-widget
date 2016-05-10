import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

let createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

export default function configureStore (initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
