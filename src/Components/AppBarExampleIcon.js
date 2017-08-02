import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import MdLabel from 'react-icons/lib/md/label'
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
import MdEvent from 'react-icons/lib/md/event'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const iconStyles = {
  marginRight: 24,
};


export default class AppBarExampleIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title="Eveinsta"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={260}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >

          <AppBar title="" iconElementLeft={<IconButton><NavigationClose /></IconButton>} onLeftIconButtonTouchTap={this.handleClose}	/>
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

          <MenuItem onTouchTap={this.handleClose}><MdEvent style={iconStyles} />Latest Events</MenuItem>
          <MenuItem onTouchTap={this.handleClose}> <MdLabel style={iconStyles} />Societies Tags</MenuItem>
          <MenuItem onTouchTap={this.handleClose}><MdExitToApp style={iconStyles} />Logout</MenuItem>
        </Drawer>
      </div>
    );
  }
}