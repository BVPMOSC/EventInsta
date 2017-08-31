import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {  CardHeader} from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import MdLabel from 'react-icons/lib/md/label'
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
import MdEvent from 'react-icons/lib/md/event'
import New from 'react-icons/lib/md/fiber-new'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import * as firebase from 'firebase';

const iconStyles = {
  marginRight: 16,
  marginLeft: 24,
  fontSize: 24,
  color: 'rgba(0,0,0,0.54)',
};
const darkText = {
  color: "rgba(0,0,0,0.87)",
  fontWeight: 500
}
const fixedBar = {
  position: "fixed",
};



class AppBarDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      authed: props.authed,
      userName: props.userName,
      photoUrl: props.photoUrl,
      isAdmin: props.isAdmin,
      useremail: props.useremail
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handlesignOut = () => {

    firebase.auth().signOut().then(function () {

      console.log('Signed Out');

    }, function (error) {
      console.error('Sign Out Error', error);
    })

    this.setState({ authed: false });
  }

  

  render() {
    return (
      <div>
        <AppBar
          title="EventInsta"
          style={fixedBar}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })} >

          <AppBar title="" iconElementLeft={<IconButton><NavigationClose /></IconButton>} onLeftIconButtonTouchTap={this.handleClose} />
          <Divider />

          <MenuItem onTouchTap={this.handleClose}>

            <CardHeader
              title={this.state.userName}
              subtitle={this.state.useremail}
              avatar={this.state.photoUrl}

            />

            <Divider />
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}><MdEvent style={iconStyles} />Latest Events</MenuItem>
          {this.state.isAdmin === true ? <MenuItem onTouchTap={this.handleClose}><New style={iconStyles} />Add Event</MenuItem> : <div></div>}


          {this.state.userName === "" ? <MenuItem onTouchTap={this.handlesignOut}><MdExitToApp style={iconStyles} />Login</MenuItem> : (
            <div>
              <MenuItem onTouchTap={this.handleClose}><MdLabel style={iconStyles} />Societies Tags</MenuItem>
              <MenuItem onTouchTap={this.handlesignOut}><MdExitToApp style={iconStyles} />Logout</MenuItem>
            </div>
          )}

        </Drawer>
      </div>

    )
  }
}

export default AppBarDrawer