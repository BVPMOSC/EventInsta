import React ,{Component}from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import {eventref} from './../../config/constants'
class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      going :props.event.going
    }
  }
render ()  {
  const { admin_name, tag, admin_avatar_url, event_heading, sub_heading, image, link,key} = this.props.event;
  return (

    <Card >
      <Image src={image} />
      <Card.Content>
        <Image floated='right' size='mini' src={admin_avatar_url} />
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
          onClick={()=>{eventref.ref(`/PWA/events/${key}`).update({'/going':this.state.going + 1}).then(()=>{
            this.setState({going:this.state.going + 1})
          })}}
            icon={<Image style={{ width: "15px", height: "15px" }} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwNy4yMzQgNTA3LjIzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA3LjIzNCA1MDcuMjM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSAwIDAgLTEuMjUgMCA0NSkiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNFRjk2NDU7IiBkPSJNMTcuNzM3LTIxNy43MTNjMCwwLTE1Ljg2MSwxNC42ODktMS4xNzIsMzAuNTYxYzE0LjY4OSwxNS44NDksMzAuNTYxLDEuMTQ5LDMwLjU2MSwxLjE0OSAgICAgbDczLjYyNi02OC4xOThjLTEuMTYxLDEuMDkyLDUuMTIsMTAuMDAxLDQuMTg3LDEwLjg2NkwyMi43NDMtMTQ4LjY4NGMwLDAtMTUuODYxLDE0LjY4OS0xLjE3MiwzMC41MzggICAgIGMxNC43LDE1Ljg2MSwzMC41NjEsMS4xNzIsMzAuNTYxLDEuMTcybDk2LjExOS04OS4wMzFjLTAuMjI4LDAuMjA1LDYuOTI5LDguMzE3LDYuNzkzLDguNDQyTDQzLjYxLTk0LjM0NCAgICAgYzAsMC0xNS44NjEsMTQuNjg5LTEuMTcyLDMwLjU0OWMxNC43LDE1Ljg0OSwzMC41NjEsMS4xNjEsMzAuNTYxLDEuMTYxbDExMS40MjMtMTAzLjIxOWMwLjEzNy0wLjExNCw3Ljc3MSw3LjU1NSw3Ljk5OSw3LjMzOSAgICAgTDg4LjI2OC02Mi4wNDJjMCwwLTE1Ljg2MSwxNC42ODktMS4xNzIsMzAuNTQ5YzE0LjcsMTUuODQ5LDMwLjU2MSwxLjE2MSwzMC41NjEsMS4xNjFzNzcuNTA1LTcxLjc5NCwxMTAuMTI2LTEwMi4wMDIgICAgIGMzMi42MDktMzAuMjA4LDM5Ljk1OS0yMi4yNzgsMzkuOTU5LTIyLjI3OGwtMjkuNDQ2LDI3LjI3M2wtMzQuMDA4LDMxLjQ4MmMwLDAtMTUuODYxLDE0LjY4OS0xLjE2MSwzMC41NDkgICAgIGMxNC43LDE1Ljg3MiwzMC41NDksMS4xODMsMzAuNTQ5LDEuMTgzbDg3LjIzMy04MC44MDVjNTIuNTQzLTQ4LjY3NCw1NS42OTQtMTMwLjc0Miw3LjAwOS0xODMuMjk2ICAgICBjLTQ4LjY3NC01Mi41NTQtMTMwLjc1My01NS42ODMtMTgzLjMwNy03LjAyYy0yLjc3NiwyLjU3MS03Ljc2LDcuNTQzLTcuNTQzLDcuNzgybC0wLjM3NS0wLjQzMkwxNy43MzctMjE3LjcxM3oiLz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREM1RDsiIGQ9Ik01MC43MzMtMTk1LjUzOGMwLDAtMTUuODYxLDE0LjY4OS0xLjE3MiwzMC41NDljMTQuNjg5LDE1Ljg3MiwzMC41NDksMS4xODMsMzAuNTQ5LDEuMTgzICAgICBsNzMuNjM3LTY4LjIyMWMtMS4xNzIsMS4wOTIsNS4xMiwxMC4wMDEsNC4xODcsMTAuODY2TDU1LjczOS0xMjYuNTA5YzAsMC0xNS44NjEsMTQuNjg5LTEuMTcyLDMwLjU0OXMzMC41NDksMS4xNzIsMzAuNTQ5LDEuMTcyICAgICBsOTYuMTE5LTg5LjA0MmMtMC4yMTYsMC4yMTYsNi45NCw4LjMxNyw2LjgwNCw4LjQ0Mkw3Ni42MDYtNzIuMTU3YzAsMC0xNS44NjEsMTQuNjc3LTEuMTcyLDMwLjUzOHMzMC41NDksMS4xNzIsMzAuNTQ5LDEuMTcyICAgICBsMTExLjQyMy0xMDMuMjA4YzAuMTQ4LTAuMTM3LDcuNzcxLDcuNTMyLDcuOTk5LDcuMzI3TDEyMS4yNjMtMzkuODU2YzAsMC0xNS44NjEsMTQuNjg5LTEuMTcyLDMwLjUzOCAgICAgYzE0LjY4OSwxNS44NjEsMzAuNTQ5LDEuMTcyLDMwLjU0OSwxLjE3MnM3Ny41MTctNzEuODA1LDExMC4xMzctMTAyLjAxM2MzMi41OTctMzAuMTk3LDM5Ljk1OS0yMi4yNjYsMzkuOTU5LTIyLjI2NiAgICAgbC0yOS40NTcsMjcuMjczTDIzNy4yODMtNzMuNjdjMCwwLTE1Ljg0OSwxNC42ODktMS4xNzIsMzAuNTQ5YzE0LjcsMTUuODYxLDMwLjU2MSwxLjE3MiwzMC41NjEsMS4xNzJsODcuMjIyLTgwLjc5NCAgICAgYzUyLjU1NC00OC42NzQsNTUuNjk0LTEzMC43NTMsNy4wMi0xODMuMjk2Yy00OC42ODYtNTIuNTU0LTEzMC43NTMtNTUuNjk0LTE4My4zMDctNy4wMDljLTIuNzg4LDIuNTYtNy43Niw3LjUzMi03LjU0Myw3Ljc2ICAgICBsLTAuMzg3LTAuNDMyTDUwLjczMy0xOTUuNTM4eiIvPgoJCQk8Zz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkFDMzM7IiBkPSJNMjc3LjMxLTM3LjQ4OWMtMi40MjMsMC00Ljg4MSwwLjc3NC02Ljk0LDIuMzY3Yy00Ljk4MywzLjg0Ni01Ljg5NCwxMC45OTEtMi4wNDgsMTUuOTYzICAgICAgbDMzLjg5NCw0My44NjFjMy44MTIsNC45NzIsMTAuOTY4LDUuOTA1LDE1Ljk1MiwyLjA0OGM0Ljk3Mi0zLjgzNCw1Ljg4Mi0xMC45OCwyLjA0OC0xNS45NTJsLTMzLjg5NC00My44NjEgICAgICBDMjg0LjA5MS0zNS45NjQsMjgwLjcyMy0zNy40ODksMjc3LjMxLTM3LjQ4OSIvPgoJCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMzMzsiIGQ9Ik0yMTQuMjY1LTQzLjY0NGMtNi4yODEsMC0xMS4zNzgsNS4wOTctMTEuMzc4LDExLjM3OHY1Ni44ODljMCw2LjI4MSw1LjA5NywxMS4zNzgsMTEuMzc4LDExLjM3OCAgICAgIGM2LjI5MiwwLDExLjM3OC01LjA5NywxMS4zNzgtMTEuMzc4di01Ni44ODlDMjI1LjY0My0zOC41NDcsMjIwLjU1Ny00My42NDQsMjE0LjI2NS00My42NDQiLz4KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkFDMzM7IiBkPSJNMzIxLjQxLTczLjk4OWMtNC42NDIsMC05LjAxMSwyLjg2Ny0xMC42ODQsNy40OThjLTIuMTYyLDUuOTA1LDAuODk5LDEyLjQyNSw2Ljc5MywxNC41NzUgICAgICBsNTIuMTQ0LDE4Ljk2N2M1LjkyOCwyLjE1LDEyLjQzNi0wLjkxLDE0LjU3NS02LjgwNGMyLjE2Mi01LjkwNS0wLjg5OS0xMi40MzYtNi43OTMtMTQuNTg2bC01Mi4xNDQtMTguOTU1ICAgICAgQzMyNC4wMTYtNzMuNzYxLDMyMi42OTYtNzMuOTg5LDMyMS40MS03My45ODkiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />}


            label={{ as: 'a', basic: true, content: `${this.state.going}` }}
            labelPosition='right'
          />
          <Button animated='vertical' onClick={()=>window.open(link)} color="teal" basic >
            <Button.Content hidden>view</Button.Content>
            <Button.Content  visible >
              <Icon name='linkify' />
            </Button.Content>
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}
}

export default EventCard