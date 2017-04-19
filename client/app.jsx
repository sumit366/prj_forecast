import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import routes from './routes.jsx';
import { hashHistory } from 'react-router';

//ReactDOM.render(<Router routes={routes} history={hashHistory}/>, document.getElementById('app'));


//ReactDOM.render(<LoginBox />, document.getElementById('login_block'));
ReactDOM.render(<Router routes={routes} history={hashHistory}/>, document.getElementById('app'));