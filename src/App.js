import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './Components/AppBarExampleIcon'
import EventCard from './Components/EventCard';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  teal500, teal700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: teal500,
    shadowColor: fullBlack,
  },
  appBar: {
    height: 60,
  },
});


class App extends Component {


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div >
          <AppBarExampleIcon />

          <Grid fluid>
            <Row>
              <Col xs={12} md={12} lg={12}>
                <h1></h1>
              </Col>
            </Row>
            <Row>


              <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                <h1></h1>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                <h1></h1>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
              </Col>

              <h1></h1>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }

}



export default App;
