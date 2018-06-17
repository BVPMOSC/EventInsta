import React, {Component} from 'react'
import LazyLoad from 'react-lazy-load';
import test from "../../helpers/1.jpg"
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import LazyImage from "../LazyImage"
import {ref, eventref, firebaseAuth} from './../../config/constants'
import firebase from 'firebase'


class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      going :props.event.going,
      subscribed: props.subscribed,
    }

  }
render ()  {
  const uid = firebaseAuth().currentUser.uid
  const { admin_name, tag, admin_avatar_url, event_heading, sub_heading, image, link,key} = this.props.event;
  return (
    <LazyLoad offsetVertical={300}>
    <Card fluid>
      <LazyImage srcPreload={test} srcLoaded={image} height={160} />
      <Card.Content>
        <Image floated='right' size='mini' src={admin_avatar_url}  />
        <Card.Header>
          {event_heading}
        </Card.Header>
        <Card.Meta>
          {tag}
        </Card.Meta>
        <Card.Description>
          <strong>{sub_heading}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui '>
          <Button
          onClick={()=>{ 
            if(this.state.subscribed){
              eventref.ref(`/PWA/users/${uid}/going`).child(key).remove()
              eventref.ref(`/PWA/events/${key}`).update({'/going':this.state.going - 1}).then(()=>{
                this.setState({going:this.state.going - 1})
                this.setState({subscribed: !this.state.subscribed})
              })
            }

            else{
              eventref.ref(`/PWA/users/${uid}/going`).child(key).set(1);
              eventref.ref(`/PWA/events/${key}`).update({'/going':this.state.going + 1}).then(()=>{
                this.setState({going:this.state.going + 1})
                this.setState({subscribed: !this.state.subscribed})
              })
            }

            }}
            icon='bookmark'

            label={{ as: 'a', basic: true, content: `${this.state.going}` }}
            labelPosition='right'
            content={this.state.subscribed==true?'going': 'will go'}
          />
          {/*<Button animated='vertical' color="teal" basic >
            <Button.Content hidden>view</Button.Content>
            <Button.Content  visible >
              <Icon name='linkify' />
            </Button.Content>
          </Button>*/}
        </div>
      </Card.Content>
    </Card>
  </LazyLoad>
  )
}
}

export default EventCard