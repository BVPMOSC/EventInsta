import React from 'react';
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RssIcon from 'react-icons/lib/fa/feed';
const SocietyCard = ({ society }) => {
    const { name, subtitle, image, poster_url, following } = society;
    return (
        <Card>
            <CardHeader
                title={name}
                subtitle={subtitle}
                avatar={image}
            />
            <CardMedia>
                <img src={poster_url} alt="" />
            </CardMedia>
            <CardActions>
                <FlatButton label={following + " Following"} primary={true} icon={<RssIcon />} />
            </CardActions>
        </Card>
    );
}


export default SocietyCard