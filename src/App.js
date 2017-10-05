import React, { Component } from 'react'
import AppBarDrawer from './Components/AppBarDrawer'
import EventPage from './Components/EventPage'
import {
  cyan500, cyan700,
  blue500,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors'
import './App.css'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Footer from './Components/Footer'
import { firebaseAuth, ref } from './config/constants'
import TagsPage from './Components/TagsPage'
import LoginPage from './Components/LoginPage'
import AddPage from './Components/AddPage'
import { Menu } from 'semantic-ui-react'

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
    shadowColor: fullBlack
  },
  appBar: {
    height: 60
  }
})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      authed: false,
      loading: true,
      userName: '',
      photoUrl: '',
      events: null,
      isAdmin: false,
      useremail: ''
    }

    // we can change this after we decide on the structure of database
    firebaseAuth().onAuthStateChanged((user) => {
      // console.log(user.photoURL)
      if (user) {
        this.setState({
          userName: user.displayName,
          photoUrl: user.photoURL,
          useremail: user.email,
          authed: true,
          loading: false,
          activeItem: 'Home'
        })
      }	else {
        this.setState({
          userName: '',
          photoUrl: '',
          authed: false,
          loading: false
        })
      }
    })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleGoogleSignIn(user) {
    console.log('hid')
    if (user) {
      this.setState({
        userName: user.displayName,
        photoUrl: user.photoURL,
        useremail: user.email,
        authed: true,
        loading: false,
        activeItem: 'Home'
      })
      console.log('hi')
    }	else {
      this.setState({
        userName: '',
        photoUrl: '',
        authed: false,
        loading: false
      })
    }
  
  }
  componentWillMount () {
    var _this = this
    var eventref = ref.child('/admins')
    eventref.once('value', (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val()
        if (childData.email === _this.state.useremail) {
          console.log('done')

          _this.setState({
            isAdmin: true
          })
        }
      })
    })
  }
  componentWillUnmount () {
    this.ref.off()
  }

  render () {
    return (

      <div>

          {this.state.authed ? (
            <div>
              <AppBarDrawer
                authed={this.authed}
                userName={this.state.userName}
                photoUrl={this.state.photoUrl}
                isAdmin={this.state.isAdmin}
                useremail={this.state.useremail}
              >
							<Menu.Item name='Home' active={this.state.activeItem === 'Home'} onClick={this.handleItemClick} />
						<Menu.Item name='Tags' active={this.state.activeItem === 'Tags'} onClick={this.handleItemClick} />
					{this.state.isAdmin ? 	<Menu.Item name='New' active={this.state.activeItem === 'New'} onClick={this.handleItemClick} /> : (<div/>)}
							</AppBarDrawer>
							{this.state.activeItem === 'Home' ? <EventPage/> : <div/>}
							{this.state.activeItem === 'Tags' ? <TagsPage/> : <div/>}
							{this.state.activeItem === 'New' ? <AddPage/> : <div/>}

              <Footer />
            </div>) : (<LoginPage gsignin={this.handleGoogleSignIn}/>)}

      </div>

    )
  }
}

export default App
