import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './AppBarExampleIcon'
import AppBarDrawer from './AppBarDrawer'
import EventPage from './EventPage'
import {
    cyan500, cyan700,
    blue500,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Footer from './Footer'
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: blue500,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        pickerHeaderColor: cyan500,
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
                    <AppBarDrawer
                        authed={true}
                        userName={"Aniket965"}
                        photoUrl={`https://avatars1.githubusercontent.com/u/22680912?v=4&s=460`}
                        isAdmin={true}
                        useremail={`aniket965.as@gmail.com`}
                    />
                    <EventPage />
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Home