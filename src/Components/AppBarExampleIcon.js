import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import MdLabel from 'react-icons/lib/md/label'
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
import MdEvent from 'react-icons/lib/md/event'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import LatestEvents from './LatestEvents'
import TagsPage from './TagsPage'
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const iconStyles = {
  marginRight: 24,
  fontSize: 24
};
const fixedBar = {
  position: "fixed",
};


export default class AppBarExampleIcon extends React.Component {

  constructor(props) {
    super(props);

    // we can change this after we decide on the structure of database 
    this.state = { open: false,eventName:'Event Name',eventDescription:'Event Description here' };
  }
  componentDidMount(){
    const rootRef=firebase.database().ref().child('pwa');
    const speedRef=rootRef.child('random-key');
    speedRef.on('value',snap=>{
      this.setState({
        eventName:snap.val().name,
        eventDescription:snap.val().description
      })
    })

  }
  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title="EventInsta"
          style={fixedBar}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Router>
          <div>
            <Drawer
              docked={false}
              width={260}
              open={this.state.open}
              onRequestChange={(open) => this.setState({ open })}
            >

              <AppBar title="" iconElementLeft={<IconButton><NavigationClose /></IconButton>} onLeftIconButtonTouchTap={this.handleClose} />
              <Divider />
              <MenuItem onTouchTap={this.handleClose}>
                <ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src="images/avatar.jpg" />
                  }>Aniket965
            </ListItem>
                <Divider />
              </MenuItem>

              <MenuItem onTouchTap={this.handleClose}><MdEvent style={iconStyles} /><Link to="/">Latest Events</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}> <MdLabel style={iconStyles} /><Link to="/Tags">Societies Tags</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><MdExitToApp style={iconStyles} /><Link to="/Logout">Logout</Link></MenuItem>
             

            </Drawer>
              <Route exact path="/" component={LatestEvents} />
              <Route path="/Tags" component={TagsPage} />
          </div>
        </Router>
      </div>
    );
  }
}