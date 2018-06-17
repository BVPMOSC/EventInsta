import React from 'react';
import EventCard from './EventCard'
import { Grid } from 'semantic-ui-react'
import './EventPage.css'

const EventList = ({ events }) => {
    const listItems = events.map((event) =>
      // <div className="column-mobi">
      <Grid.Column mobile={16} tablet={8} computer={4}>
          <EventCard key={event.key} event={event} />
      </Grid.Column>
      // </div>
    );
    return (
      <Grid container columns={4} className={'topMargin'}>
        {listItems}
      </Grid>
    );
}
export default EventList
