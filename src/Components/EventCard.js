import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MdPersonAdd from 'react-icons/lib/md/person-add'
import MdEventSeat from 'react-icons/lib/md/event-seat'
const EventCard = () => (
    <Card>
        <CardHeader
            title="Aniket965"
            subtitle="MTG"
            avatar="images/avatar.jpg"
        />
        <CardMedia overlay={<CardTitle title="BVEST 2015" subtitle="hacking Begins.." />}>
            <img src="images/flex1.jpg" alt="" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Going"  primary={true} icon={<MdEventSeat />}/>
            <FlatButton label="Invite"  secondary={true} icon={<MdPersonAdd/>}/>
           
        </CardActions>
    </Card>
);



export default EventCard;