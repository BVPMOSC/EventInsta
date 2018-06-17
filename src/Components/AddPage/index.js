import React, { Component } from 'react'
import { firebaseAuth } from '../../config/constants'
import { ref } from '../../config/constants'
import { Input } from 'semantic-ui-react'
import { Button, Icon, Segment, Grid } from 'semantic-ui-react'

function handleSend(state) {
  var eventref = ref.child('/events')
  if (state.event_heading !== '' && state.image !== '' && state.tag !== '') {
    eventref.push(state).then(() => {
      document.getElementById('addevent_heading').value = ''
      document.getElementById('addsub_heading').value = ''
      document.getElementById('addSName').value = ''
      document.getElementById('addimage').value = ''
    })
  }
}

class AddPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      admin_name: '',
      admin_avatar_url: '',
      event_heading: '',
      sub_heading: '',
      tag: '',
      image: '',
      site: '',
      going: 0,
      uid: 1

    }
  }

  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          admin_name: user.displayName,
          admin_avatar_url: user.photoURL
        })
      } else {
        this.setState({
          admin_name: '',
          admin_avatar_url: ''
        })
      }
    })
  }
  render() {
    return (
      <Grid container>
        <Grid.Row />
        <Grid.Row />
        <Grid.Row centered>
          <Grid.Column textAlign='center' >
            <Grid.Row />
            <Segment color='blue'>
              <h1> New Event🤘🤘</h1>
              <br />
              <Input id='addevent_heading'
                size='large'
                defaultValue={this.state.event_heading}
                onChange={(e, newvalue) => { this.setState({ event_heading: newvalue.value }) }}
                action={{ color: 'blue', icon: 'id card', iconPosition:'left'}}
                placeholder='Enter Heading...' />
              <br /><br />
              <Input id='addsub_heading'
                size='large'
                defaultValue={this.state.event_heading}
                onChange={(e, newvalue) => { this.setState({ sub_heading: newvalue.value }) }}
                action={{ color: 'blue', icon: 'id card outline', iconPosition:'left'}}
                placeholder='Enter Sub Heading...' />
              <br />
              <br />
              <Input
                size='large'
                id='addimage'
                action={{ color: 'blue', icon: 'linkify', iconPosition:'left'}}
                onChange={(e, newvalue) => { this.setState({ image: 'http://' + newvalue.value }) }}
                placeholder='i.com/Image.jpg' />
              <br />
              <br />
              <Input
                size='large'
                id='addSName'
                action={{ color: 'blue', icon: 'hashtag', iconPosition:'left'}}
                placeholder='Enter Tag'
                onChange={(e, newvalue) => { this.setState({ tag: newvalue.value }) }}
              />

              <br />
              <br />
              <Button animated
                color='red'
                onClick={() => { var st = this.state; handleSend(st) }}
              >
                <Button.Content visible>Add Event 🎉</Button.Content>
                <Button.Content hidden>
                  <Icon name='right arrow' />
                </Button.Content>
              </Button>
              <br />
              <br /><br />
              <br />

            </Segment>
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default AddPage
