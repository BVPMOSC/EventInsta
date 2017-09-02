import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { auth, login, resetPassword, googleSignIn } from './../../helpers/auth'
import './Login.css'
import { NavLink } from 'react-router-dom'

var firebase = require('firebase')
var email, password
const docsButtonStyle = {
  position: 'fixed',
  margin: '2em',
  bottom: 0,
  left: 0,
  animation: 'back-to-docs 1.5s ease-in-out infinite',
  zIndex: 6
}

const style = (
  <style>{`
    @keyframes back-to-docs {
        0% { transform: translateY(0); }
        50% { transform: translateY(0.35em); }
        100% { transform: translateY(0); }
    }

  `}</style>
)
function handleLogin () {
  login(email, password)
    .then(() => {
      email = ''
      password = ''
    })
    .catch((error) => {
      // eslint-disable-next-line
      error.message === 'EMAIL_NOT_FOUND' ? auth(email, password) : ''
      // this.setState(setErrorMsg('Invalid username/password.'))
    })
}

export default class Login extends Component {
  // noinspection SpellCheckingInspection
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    //  Firebase config
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().languageCode = 'en'
  }

  render () {
    return (
      <div>
        {style}
        <div className='login-form'>
          {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
          <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Form size='large' onSubmit={handleLogin}>
                <Segment>
                <Header size={'huge header'} color='teal' textAlign='center' content={'EventInsta'} />
                <Divider />
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    onChange={(e, { value }) => { email = value }}
                    placeholder='E-mail address'
                    required
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    onChange={(e, { value }) => { password = value }}
                    type='password'
                    required
                  />
                </Form.Group>
                  <Button.Group size='large' fluid>
                    <Button icon='google plus' color={'google plus'} onClick={googleSignIn} content={'Google Sign in'} />
                    <Button.Or />
                    <Form.Button icon='mail outline' color='teal' content={'Continue'} />
                  </Button.Group>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
        <div style={docsButtonStyle}>
          <Button
            as={NavLink}
            to={`https://github.com/bvpmosc/eventinsta`}
            color='secondary'
            icon='github'
            content='Source'
            target='_blank'
          />
        </div>
      </div>
    )
  }
}
