import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import FlatButton from 'material-ui/FlatButton';
import RssIcon from 'react-icons/lib/fa/feed';
const SocietyCard = ({ society }) => {
    const { name, subtitle, image, poster_url, following ,site_link} = society;
    return (

        <Card>
    <Image src={image} size="medium" />
    <Card.Content>
      <Card.Header>
        <a href={site_link}>{name}</a>
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