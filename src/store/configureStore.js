import 'babel-polyfill';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import { loginWorkerSaga } from '../sagas/loginSaga';
import { registerWorkerSaga } from '../sagas/registerSaga';
import rootSaga from '../sagas/rootSaga';
import { settingsWorkerSaga } from '../sagas/settingsSaga';
import { selectCountryWorkerSaga } from '../sagas/worldMapSaga';
import { addBuildingSaga } from '../sagas/addBuildingSaga';
import { addTroopsSaga } from '../sagas/addTroopsSaga';

export const history = createHistory();

// PROD
function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    reactRouterMiddleware,
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
  ));

  sagaMiddleware.run(selectCountryWorkerSaga, loginWorkerSaga, registerWorkerSaga, settingsWorkerSaga);
  sagaMiddleware.run(loginWorkerSaga, registerWorkerSaga, addBuildingSaga, addTroopsSaga);
  return store;
}

// DEV
function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    reduxImmutableStateInvariant(),
    sagaMiddleware,
    reactRouterMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
