import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class SocityCard extends Component {
    render () {
        return (
           <Card>
        <CardHeader
            title="BVP MTG"
            subtitle="Micorsoft"
            avatar="images/mtg.jpg"
        />
        <CardMedia>
            <img src="images/mtgbanner.jpg" alt="" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Follow"  primary={true}/>
            <FlatButton label="Unfollow"  secondary={true} />
           
        </CardActions>
    </Card>
        );
    }
}

export default SocityCard