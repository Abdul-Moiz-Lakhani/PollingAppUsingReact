import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import $ from 'jquery';
// import PopperJS from 'popper.js';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './containers/MainPage';
import AppRoute from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>< MainPage /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
