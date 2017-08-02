import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */


export default class AppBarExampleIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

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
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}