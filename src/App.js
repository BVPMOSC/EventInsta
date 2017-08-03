import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './Components/AppBarExampleIcon'
import {
  teal500, teal700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Footer from './Components/Footer'
import * as firebase from 'firebase';
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
  constructor(props) {
    super(props);
    // we can change this after we decide on the structure of database 
    this.state = {  };
  }
  // AppBarExample Component which will then fill in the details and render
  // get the number of event from firebase and pass the event ID as prop to 
  componentDidMount(){
    
    const rootRef=firebase.database().ref().child('pwa');
    const speedRef=rootRef.child('random-key');
    speedRef.on('value',snap=>{
      this.setState({
        
      })
    })

  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div >
          <AppBarExampleIcon />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }

}



export default App;
