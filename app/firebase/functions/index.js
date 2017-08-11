const functions = require('firebase-functions');
var admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
exports.sendNotifications = functions.database.ref('/PWA/events/{event_id}').onWrite(event => {
  const snapshot = event.data;
  // Only send a notification when a new message has been created.
  /*if (snapshot.previous.val()) {
    return;
  }*/
	console.log('data changed');// Notification details.
  const text = "trial";
  const payload = {
    notification: {
      title: text,
      body: text ? (text.length <= 100 ? text : text.substring(0, 97) + '...') : '',
      icon: 'icon.jpg',
      click_action: `https://${functions.config().firebase.authDomain}`
    }
  };
//change topic to tag as recieved from DB
var topic="trial";
  admin.messaging().sendToTopic(topic, payload)
  .then(function(response) {
    // See the MessagingTopicResponse reference documentation for the
    // contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });

  // Get the list of device tokens.
  /*return admin.database().ref('fcmTokens').once('value').then(allTokens => {
    if (allTokens.val()) {
      // Listing all tokens.
      const tokens = Object.keys(allTokens.val());

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
