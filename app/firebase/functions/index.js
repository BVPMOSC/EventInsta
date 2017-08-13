const functions = require('firebase-functions');
var admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
exports.sendNotifications = functions.database.ref('/PWA/events/{event_id}').onWrite(event => {
  const snapshot = event.data;
  // Only send a notification when a new message has been created.
  /*if (snapshot.previous.val()) {
    return;

  }*/
  console.log(event.data);
	console.log('data changed');// Notification details.
  console.log(snapshot);
  console.log(snapshot._newData);
  const text = "trial";
  const payload = {
    notification: {
      title: snapshot._newData.event_heading,
      body: 'Hey '+snapshot._newData.tag+' just added/modified their Event , have a look ! '
      ,
      icon:'https://avatars3.githubusercontent.com/u/1909340?v=4&s=200',
      click_action: `https://${functions.config().firebase.authDomain}`
    }
  };

  admin.database().ref('/PWA/fcm_tokens').once('value', function(snapshot) {
  
  var registration_tokens=[];

  snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    //console.log(childData.token);
    registration_tokens.push(childData.token);
  });
  console.log(registration_tokens);

  admin.messaging().sendToDevice(registration_tokens, payload)
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });


});



//change topic to tag as recieved from DB
/*var topic="trial";
  admin.messaging().sendToTopic(topic, payload)
  .then(function(response) {
    // See the MessagingTopicResponse reference documentation for the
    // contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });
*/



  // Get the list of device tokens.
  /*return admin.database().ref('/PWA/fcm_tokens').once('value').then(allTokens => {
    if (allTokens.val()) {
      // Listing all tokens.
      //console.log(allTokens)
      const tokens = Object.keys(allTokens.val());
      console.log(allTokens.val().tokens);
      console.log(allTokens.val().val());
      console.log("inside ref");
      console.log(tokens);
      console.log(tokens.token);
      console.log(Object.val(allTokens.val()))
      console.log("trying getvalue on tokens");
      console.log(tokens.getvalue());
            console.log("trying val on tokens");

      console.log("trying values on tokens");

      console.log(tokens.values());
      // Send notifications to all tokens.

      return admin.messaging().sendToDevice(tokens, payload).then(response => {
        // For each message check if there was an error.
        const tokensToRemove = [];
        response.results.forEach((result, index) => {
          const error = result.error;
          if (error) {
            console.error('Failure sending notification to', tokens[index], error);
            // Cleanup the tokens who are not registered anymore.
             if (error.code === 'messaging/invalid-registration-token' ||
                error.code === 'messaging/registration-token-not-registered') {
              tokensToRemove.push(allTokens.ref.child(tokens[index]).remove());
            }
          }
        });
        return Promise.all(tokensToRemove);
      });
    }
  });*/
});
