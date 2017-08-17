import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
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
        <Grid fluid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <h1> </h1>
              <h1> </h1>
            </Col>
          </Row>
          <EventList events={this.state.events} />
        </Grid>
      </div>
    )
  }
}

export default LatestEvents