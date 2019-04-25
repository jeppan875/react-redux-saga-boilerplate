import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const dev = process.env.NODE_ENV !== 'production';

const composeEnhancers =
    dev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const middleware = [sagaMiddleware];

const store = createStore(
    rootReducer(),
    composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
