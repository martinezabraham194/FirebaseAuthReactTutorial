import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import * as auth from './Server/Auth';
import * as firebase from './Server/Firebase';

export {auth, firebase};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
