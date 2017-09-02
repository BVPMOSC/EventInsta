import React from 'react'

import FlatButton from 'material-ui/FlatButton'
import { Button, Card, Image } from 'semantic-ui-react'
import MdPersonAdd from 'react-icons/lib/md/person-add'
import MdEventSeat from 'react-icons/lib/md/event-seat'

const EventCard = ({ event }) => {
    const { admin_name, tag, admin_avatar_url, event_heading, sub_heading, image, going } = event;
    return (

            <Card > 
                <Image src={image} />
            <Card.Content>
              <Image floated='right' size='mini' src={admin_avatar_url} />
              <Card.Header>
                {admin_name}
              </Card.Header>
              <Card.Meta>
                {tag}
              </Card.Meta>
              <Card.Description>
               <strong>{event_heading}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>{going} Going</Button>
              </div>
            </Card.Content>
          </Card>
    )
}


export default EventCard