import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { CardHeader } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import MdLabel from 'react-icons/lib/md/label'
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
import MdEvent from 'react-icons/lib/md/event'
import New from 'react-icons/lib/md/fiber-new'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router-dom'
import { Menu, Segment, Sticky, Image, Card, Popup, Button } from 'semantic-ui-react'
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
			useremail: props.useremail,
			activeItem: 'Home'
		};
	}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
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
				{/* <AppBar
					title="EventInsta"
					style={fixedBar}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonTouchTap={this.handleToggle}
				/> */}
				<div>

					<Menu pointing secondary fixed="top" color="teal" floated style={{ background: "white" }}>
						<Menu.Item name='Home' active={this.state.activeItem === 'Home'} onClick={this.handleItemClick} />
						<Menu.Item name='Tags' active={this.state.activeItem === 'Tags'} onClick={this.handleItemClick} />
						<Menu.Item name='New' active={this.state.activeItem === 'New'} onClick={this.handleItemClick} />
						<Menu.Menu position='right'>
							<Popup
							open={this.state.open}
							
								content={<Card>
									<Card.Content>
										<Image floated='right' size='small' src={this.state.photoUrl} avatar />
										<Card.Header>
											{this.state.userName}
										</Card.Header>
										<Card.Meta>
											{this.state.useremail}
										</Card.Meta>

									</Card.Content>
									<Card.Content extra>
										<div className='ui two buttons'>
											<Button basic color='red' onClick={this.handlesignOut}>Logout</Button>
										</div>
									</Card.Content>
								</Card>}
								trigger={<Menu.Item name='' icon={`user outline`} onClick={this.handleToggle} />}

							/> </Menu.Menu>
					</Menu>

				</div>
				<Drawer
					docked={false}
					width={300}
					open={false}
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
					<MenuItem onTouchTap={this.handleClose}><MdEvent style={iconStyles} />
						<Link to="/" style={darkText}>Latest Events</Link>
					</MenuItem>
					{this.state.isAdmin === true ? <MenuItem onTouchTap={this.handleClose}><New style={iconStyles} />
						<Link to="/new" style={darkText}>Add Event</Link>
					</MenuItem> : <div></div>}

					{this.state.userName === "" ? <MenuItem onTouchTap={this.handlesignOut}>
						<MdExitToApp style={iconStyles} />
						<Link to="/login" style={darkText}>Login</Link>
					</MenuItem> : (
							<div>
								<MenuItem onTouchTap={this.handleClose}><MdLabel style={iconStyles} />
									<Link to="/socities" style={darkText}>Societies Tags</Link>
								</MenuItem>
								<MenuItem onTouchTap={this.handlesignOut}><MdExitToApp style={iconStyles} />
									<Link to="logout" style={darkText}>Logout</Link>
								</MenuItem>
							</div>
						)}

				</Drawer>
			</div>

		)
	}
}

export default AppBarDrawer