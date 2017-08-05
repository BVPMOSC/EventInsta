import React, { Component } from 'react';
var firebase = require("firebase");
var firebaseui = require('firebaseui');
export default class Login extends Component {
  constructor(props) {
    super(props);
    // FirebaseUI config.
    var uiConfig = {
      signInSuccessUrl: '/new',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: ''
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

  }
  render() {
    return (
          <div id="firebaseui-auth-container"></div>
        );
  }
}