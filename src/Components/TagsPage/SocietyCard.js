import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
const SocietyCard = ({ society }) => {
    const { name, subtitle, image, poster_url, following ,site_link} = society;
    return (

        <Card fluid>
    <Image src={image} fluid />
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