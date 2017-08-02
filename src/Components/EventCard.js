import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const EventCard = () => (
    <Card>
        <CardHeader
            title="Aniket965"
            subtitle="BVPMOSC"
            avatar="images/avatar.jpg"
        />
        <CardMedia overlay={<CardTitle title="Hacking The World" subtitle="hacking Begins.." />}>
            <img src="images/banner.jpg" alt="" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Going"  primary={true}/>
            <FlatButton label="Invite"  secondary={true}/>
            <FlatButton label="Not Intrested" />
        </CardActions>
    </Card>
);
const styles = {
    links:{
        // color:'#eee';
    }
};

export default EventCard;