import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ref } from '../config/constants'
import { Card, CardActions, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MdPersonAdd from 'react-icons/lib/md/person-add'
import MdEventSeat from 'react-icons/lib/md/event-seat'
function EventList(props) {
  const events = props.events;
  const listItems = events.map((event) =>
    <Col xs={12} sm={6} md={4} lg={4}>
      {console.log()}
      <Card>
        <CardHeader
          title={event.admin_name}
          subtitle={event.tag}
          avatar={event.admin_avatar_url}
        />
        <CardMedia overlay={<CardTitle title={event.event_heading} subtitle={event.sub_heading} />}>
          <img src={event.image} alt="" />
        </CardMedia>
        <CardActions>
          <FlatButton label={event.going + " Going"} primary={true} icon={<MdEventSeat />} />
          <FlatButton label="Invite" secondary={true} icon={<MdPersonAdd />} />

        </CardActions>
      </Card>
      <h1></h1>
    </Col>
  );
  return (
    <Row>{listItems}</Row>
  );
}
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
        var childKey = childSnapshot.key;
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
              <h1></h1>
               <h1></h1>
            </Col>
          </Row>
      
            <EventList events={this.state.events} />
      

        </Grid>

      </div>
    )
  }
}

export default LatestEvents