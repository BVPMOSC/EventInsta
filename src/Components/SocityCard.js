import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RssIcon from 'react-icons/lib/fa/feed';
import CloseIcon from 'react-icons/lib/fa/close'
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
            <FlatButton label="Followed"  primary={true} icon={<RssIcon/>}/>
        </CardActions>
    </Card>
        );
    }
}

export default SocityCard