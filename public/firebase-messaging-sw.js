
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCY6ZkAsb-CTT2mEu-J4FeaeF90USDCU7k",
    authDomain: "learning-5e04c.firebaseapp.com",
    databaseURL: "https://learning-5e04c.firebaseio.com",
    projectId: "learning-5e04c",
    storageBucket: "learning-5e04c.appspot.com",
    messagingSenderId: "627769457667"
  };
firebase.initializeApp(config);
const messaging = firebase.messaging();


