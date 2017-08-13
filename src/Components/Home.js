import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './AppBarExampleIcon'
import {
    pink500, pink700,
    blue500,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Footer from './Footer'
injectTapEventPlugin();



const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink500,
        primary2Color: pink700,
        primary3Color: grey400,
        accent1Color: blue500,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        pickerHeaderColor: pink500,
        shadowColor: fullBlack,
    },
    appBar: {
        height: 60,
    },
});


class Home extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBarExampleIcon />
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Home