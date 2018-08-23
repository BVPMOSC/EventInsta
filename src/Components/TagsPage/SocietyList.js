import React, { Component } from "react";
import SocietyCard from "./SocietyCard";
import { Grid } from "semantic-ui-react";

export default class SocietyList extends Component {

  render() {
    const { socities } = this.props;
    const listItems = socities.map(society => (
      <Grid.Column mobile={16} tablet={8} computer={5} key={society.name + society.link}>
        <SocietyCard
          society={society}
          followed={society.followed}
        />
        <h1> </h1>
      </Grid.Column>
    ));
    return (
      <Grid container className={"topMargin"}>
        {listItems}
      </Grid>
    );
  }
}
