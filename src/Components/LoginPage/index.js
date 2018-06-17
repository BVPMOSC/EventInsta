import React, { Component } from 'react'
import { Button, Divider, Form,  Header, Segment } from 'semantic-ui-react'
import { auth, login, googleSignIn } from './../../helpers/auth'
import './Login.css'

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

export default class Login extends Component {
  // noinspection SpellCheckingInspection
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:'',
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    const {email, password} = this.state
    login(email, password)
      .then((user) => {
       this.setState({email:'', password:''})
       console.log(user)
      })
      .catch((error) => {
        // eslint-disable-next-line
        error.message === 'EMAIL_NOT_FOUND' ? auth(email, password) : ''
        // this.setState(setErrorMsg('Invalid username/password.'))
      })
  }

  render() {
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
          <div className='lp-wrapper' >
              <Form size='large' onSubmit={this.handleLogin} className='lp-form' >
                <Segment color='red'>
                  <Header size={'huge'} color='teal' textAlign='center' content={'EventInsta'} />
                  <Divider />
                  <Form.Group widths='equal'>
                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      onChange={(e, { value }) => this.setState({email:value})}
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
                      onChange={(e, { value }) => this.setState({password:value})}
                      type='password'
                      required
                    />
                  </Form.Group>
                  <Button.Group size='large' fluid>
                    <Button type="button" icon='google plus' color={'google plus'} onClick={()=> googleSignIn().then((result) => {
                      if (result.credential) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        // var token = result.credential.accessToken;
                        // ...
                      }
                      console.log(result)
                      this.props.gsignin(result.user);
                    }).catch(err=>console.log(err))

                    } content={'Google Sign in'} />
                    <Button.Or />
                    <Form.Button icon='mail outline' color='teal' content={'Login'} onClick={this.handleLogin} />
                  </Button.Group>
                </Segment>
              </Form>
         </div>
        </div>
        <div style={docsButtonStyle}>
          <Button

            to={`https://github.com/bvpmosc/eventinsta`}
            color='black'
            icon='github'
            content='Source'
            target='_blank'
          />
        </div>
      </div>
    )
  }
}
