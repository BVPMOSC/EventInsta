import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import EventCard from './EventCard'
const EventList = ({ events }) => {
    const listItems = events.map((event) =>
      <Col xs={12} sm={6} md={3} lg={3}>
        <EventCard key={event.toString()} event={event} />
        <h1> </h1>
      </Col>
    );
    return (
      <Row>{listItems}</Row>
    );
}
export default EventList