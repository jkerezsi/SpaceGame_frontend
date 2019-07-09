import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import { Provider } from 'react-redux';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const store = configureStore();


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
