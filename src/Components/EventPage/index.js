import React, { Component } from 'react'
import { ref } from '../../config/constants'
import EventList from './EventList'
class LatestEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
         events: []
    };
  }
  componentWillMount() {

    var _this = this
    this.ref = ref.child("/events")

    this.ref.once('value', function (snapshot) {
      var items = [];
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        var childKey =childSnapshot.key;
        childData.key =childKey;
        items.push(childData);
        // ...
      });

      _this.setState({
        events: items
      });

    });
  }
  componentWillUnmount() {
    this.ref.off();
  }
  render() {
    return (
      <div>
        <EventList events={this.state.events} />
      </div>
    )
  }
}

export default LatestEvents