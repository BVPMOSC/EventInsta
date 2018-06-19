import React, { Component } from 'react'
import AppBarDrawer from './Components/AppBarDrawer'
import EventPage from './Components/EventPage'
import './App.css'
import Footer from './Components/Footer'
import { firebaseAuth, ref } from './config/constants'
import TagsPage from './Components/TagsPage'
import LoginPage from './Components/LoginPage'
import AddPage from './Components/AddPage'
import { Menu } from 'semantic-ui-react'

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
  handleSignIn (user) {

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
          { this.state.loading && <div>Loading...</div> }
          { !this.state.loading && this.state.authed && (
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
            </div>) 
          }

          { !this.state.loading && !this.state.authed && (<LoginPage gsignin={this.handleGoogleSignIn} />) }

      </div>
    )
  }
}

export default App
