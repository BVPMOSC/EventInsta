import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ref, firebaseAuth } from './config/constants'
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCY6ZkAsb-CTT2mEu-J4FeaeF90USDCU7k",
    authDomain: "learning-5e04c.firebaseapp.com",
    databaseURL: "https://learning-5e04c.firebaseio.com",
    projectId: "learning-5e04c",
    storageBucket: "learning-5e04c.appspot.com",
    messagingSenderId: "627769457667"
  };
//firebase.initializeApp(config);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}
const messaging=firebase.messaging();

messaging.requestPermission()
.then(function(){
	console.log("yay permission granted");
	return messaging.getToken();


})
.then(function(token){
	
	console.log(token);
})

.catch(function(err){
	console.log("no permission");
})
messaging.onMessage(function(payload){
	//this gets invoked when user is on page and the database is updated
	console.log('onMessage',payload);
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
