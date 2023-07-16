import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import persistedReducer from "./persist";
import logger from 'redux-logger';
import rootSaga from "./root.saga";

const sagaMiddleware=createSagaMiddleware();

const middleWares=[process.env.NODE_ENV!=='production'&&logger,sagaMiddleware,].filter(Boolean);
const composeEnhancer=(process.env.NODE_ENV!=='production'&& window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose;

const composeEnhancers=composeEnhancer(applyMiddleware(...middleWares));


const store=createStore(persistedReducer,composeEnhancers);
const persistor=persistStore(store);
sagaMiddleware.run(rootSaga);

export {store,persistor}
