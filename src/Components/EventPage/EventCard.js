import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MdPersonAdd from 'react-icons/lib/md/person-add'
import MdEventSeat from 'react-icons/lib/md/event-seat'

const EventCard = ({ event }) => {
    const { admin_name, tag, admin_avatar_url, event_heading, sub_heading, image, going } = event;
    return (
        <Card>
            <CardHeader
                title={admin_name}
                subtitle={tag}
                avatar={admin_avatar_url}
            />
            <CardMedia overlay={<CardTitle title={event_heading} subtitle={sub_heading} />}>
                <img src={image} alt="" />
            </CardMedia>
            <CardActions>
                <FlatButton label={going + " Going"} primary={true} icon={<MdEventSeat />} />
                <FlatButton label="Invite" secondary={true} icon={<MdPersonAdd />} />

            </CardActions>
        </Card>

    );
}


export default EventCard