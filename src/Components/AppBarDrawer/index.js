import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import { CardHeader } from 'material-ui/Card'
import MenuItem from 'material-ui/MenuItem'
import MdLabel from 'react-icons/lib/md/label'
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
import MdEvent from 'react-icons/lib/md/event'
import New from 'react-icons/lib/md/fiber-new'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import TagsPage from './../TagsPage'
import { Menu, Segment, Sticky, Image, Card, Popup, Button } from 'semantic-ui-react'
import * as firebase from 'firebase'

const iconStyles = {
  marginRight: 16,
  marginLeft: 24,
  fontSize: 24,
  color: 'rgba(0,0,0,0.54)'
}
const darkText = {
  color: 'rgba(0,0,0,0.87)',
  fontWeight: 500
}
const fixedBar = {
  position: 'fixed'
}

const userMenuStyle = {
	boxShadow: 'none'
}

const userMenuContent = {
  'padding-left': '7px',
  'padding-right': '7px'
}

class AppBarDrawer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      authed: props.authed,
      userName: props.userName,
      photoUrl: props.photoUrl,
      useremail: props.useremail,
      activeItem: 'Home'
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handlesignOut = () => {
    firebase.auth().signOut().then(function () {
      console.log('Signed Out')
    }, function (error) {
      console.error('Sign Out Error', error)
    })

    this.setState({ authed: false })
  }

  render () {
    const {isAdmin, children} = this.props
    return (
			<div>

				<div>

					<Menu pointing secondary  fixed="top" color='blue' inverted size="massive">
					{children}

						<Menu.Menu position='right'>
							<Popup
							open={this.state.open}

								content={
										<Card style={userMenuStyle}>
									<Card.Content style={userMenuContent}>
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
								</Card>
										}
								trigger={<Menu.Item name='' icon={`user outline`} onClick={this.handleToggle} />}

							/> </Menu.Menu>
					</Menu>

				</div>

			</div>

    )
  }
}

export default AppBarDrawer
