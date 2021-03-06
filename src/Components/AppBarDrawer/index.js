import React, { Component } from 'react'
import { Menu, Image, Card, Popup, Button } from 'semantic-ui-react'
import * as firebase from 'firebase'

import OutsideAlerter from '../OutsideAlerter'

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

    this.popupRef = null
  }

  setPopupRef = (node) => {this.popupRef= node;}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleToggle = () => {this.setState({ open: !this.state.open });}

  handleClose = () => this.setState({ open: false });

  handleClickOutside = (e) => {
  	// check if the click is outside popup
  	// following logic can be moved to OutsideAlerter but would involve passing down popupRef
  	
  	if(!this.popupRef.popupCoords) return //defensive coding

  	let {left, right, top, bottom} = this.popupRef.popupCoords
  	let {clientX, clientY} = e
  	if(clientX <right && clientX >left) {
  		if(clientY < top || clientY > bottom) {
  			this.handleClose()
  		}
  	} else {
  		this.handleClose()
  	}
  }

  handlesignOut = () => {
    firebase.auth().signOut().then(function () {
      console.log('Signed Out')
    }, function (error) {
      console.error('Sign Out Error', error)
    })

    this.setState({ authed: false })
  }

  render () {
    const {children} = this.props
    return (
			<div>

				<div>

					<Menu pointing secondary  fixed="top" color='white' inverted size="massive" className="shadow grad" >
					{children}

						<Menu.Menu position='right'>
							<OutsideAlerter handler={this.handleClickOutside} >
								<Popup
								ref={this.setPopupRef}
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
									trigger={<Menu.Item name='' icon={`user circle outline`} onClick={this.handleToggle} />}

								/>
							</ OutsideAlerter> 
							</Menu.Menu>
					</Menu>

				</div>

			</div>
    )
  }
}

export default AppBarDrawer
