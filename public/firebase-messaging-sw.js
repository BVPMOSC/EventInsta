
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
//const messaging = firebase.messaging();
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