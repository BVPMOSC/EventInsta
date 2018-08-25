import React, { Component } from "react";
import { ref, firebaseAuth } from "../../config/constants";
import EventList from "./EventList";
class LatestEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentWillMount() {
    var _this = this;
    this.ref = ref.child("/events");

    var uid = firebaseAuth().currentUser.uid;
    this.going = ref.child(`/users/${uid}/going`);

    var subs = [];
    this.going.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        // var childData = childSnapshot.val()["key"];
        var childKey = childSnapshot.key;
        subs.push(childKey);
      });
    });

    this.ref.once("value", function(snapshot) {
      var items = [];
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var childKey = childSnapshot.key;
        childData.key = childKey;
        items.push(childData);
        // ...
      });

      _this.setState({
        events: items,
        subscribed: subs
      });
    });
  }
  componentWillUnmount() {
    this.ref.off();
  }
  render() {
    return (
      <div>
        <div className="ei-date">
          <h1>
            Upcoming Events
          </h1>
        </div>
        <EventList events={this.state.events} subs={this.state.subscribed} />
      </div>
    );
  }
}

export default LatestEvents;
