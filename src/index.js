import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import PopperJS from 'popper.js';
import AppRoute from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRoute />, document.getElementById('root'));
registerServiceWorker();
