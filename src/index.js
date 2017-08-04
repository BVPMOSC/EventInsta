import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCY6ZkAsb-CTT2mEu-J4FeaeF90USDCU7k",
    authDomain: "learning-5e04c.firebaseapp.com",
    databaseURL: "https://learning-5e04c.firebaseio.com",
    projectId: "learning-5e04c",
    storageBucket: "learning-5e04c.appspot.com",
    messagingSenderId: "627769457667"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
