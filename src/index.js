import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import $ from 'jquery';
// import PopperJS from 'popper.js';
// import MainPage from './containers/MainPage';
import AppRoute from './Routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './Redux/Store';

ReactDOM.render(
    <Provider store={store}>
        <AppRoute />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
