import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import FlatButton from 'material-ui/FlatButton';
import RssIcon from 'react-icons/lib/fa/feed';
const SocietyCard = ({ society }) => {
    const { name, subtitle, image, poster_url, following } = society;
    return (

        <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Description>
        {subtitle}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
        <Icon name='feed' />
        {following} Following
      
    </Card.Content>
  </Card>

    );
}


export default SocietyCard