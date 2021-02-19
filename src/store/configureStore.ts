import { compose, applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancer = composeWithDevTools || compose;

  const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
