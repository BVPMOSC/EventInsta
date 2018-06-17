const functions = require('firebase-functions');
var admin = require("firebase-admin");

admin.initializeApp();



exports.sendNotifications = functions.database.ref('/PWA/events/{event_id}').onWrite((change, context) => {

  //  // Only edit data when it is first created.
  //  if (change.before.exists()) {
  //   return null;
  // }
  // Exit when the data is deleted.
  if (!change.after.exists()) {
    return null;
  }
  const original = change.after.val();

  const payload = {
    notification: {
      title: original.event_heading,
      body: 'Hey '+original.tag+' just modified their Event , have a look ! '
      ,
      icon:'https://avatars3.githubusercontent.com/u/1909340?v=4&s=200',
      click_action: `${original.link}`
    }
  };

  //TODO see how to get topic from db here
  // if(snapshot._data==null)
  // {
    const topic = original.tag
    admin.messaging().sendToTopic(topic, payload)
    .then(function(response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });

  // }
});
//@params token ,topic
exports.unfollow = functions.https.onRequest((req, res) => {

 var token = req.query.token;
 console.log(token);
 var topic =req.query.topic;
 console.log(topic);


    // Unsubscribe the device corresponding to the registration token from
    // the topic.
    admin.messaging().unsubscribeFromTopic(token, topic)
    .then(function(response) {
      console.log("Successfully unsubscribed from topic:", response);
      res.status(200).json({ status: "success", data:response  });
    })
    .catch(function(error) {
      console.log("Error unsubscribing from topic:", error);
    });
  })

exports.follow=functions.https.onRequest((req,res)=>{
  var token = req.query.token;
  console.log(token);
  var topic =req.query.topic;
  console.log(topic);


    // Subscribe the device corresponding to the registration token to the
    // topic.
    admin.messaging().subscribeToTopic(token, topic)
    .then(function(response) {
      console.log("Successfully subscribed to topic:", response);
      res.status(200).json({ status: "success", data:response  });
    })
    .catch(function(error) {
      console.log("Error subscribing to topic:", error);
    });

  })
