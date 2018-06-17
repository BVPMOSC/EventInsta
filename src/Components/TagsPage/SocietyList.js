import React from 'react';
import SocietyCard from './SocietyCard'
import { Grid } from 'semantic-ui-react'

const SocietyList = ({ socities }) => {
    const listItems = socities.map((society) =>
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <SocietyCard society={society} key={society.name}  />
            <h1> </h1>
        </Grid.Column>
    );
    return (
        <Grid container className={'topMargin'} >{listItems}</Grid>
    );
}
export default SocietyList