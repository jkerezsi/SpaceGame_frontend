import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import Navbar from './Components/Navbar';

const store = configureStore();


ReactDOM.render((
  <Router>
    <Provider store={store}>
      <Navbar />
      <App />
    </Provider>
  </Router>
), document.getElementById('root'));

serviceWorker.unregister();
