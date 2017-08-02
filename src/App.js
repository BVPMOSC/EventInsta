import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './Components/AppBarExampleIcon'
injectTapEventPlugin();
class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <AppBarExampleIcon />
      </MuiThemeProvider>
    );
  }

}



export default App;
