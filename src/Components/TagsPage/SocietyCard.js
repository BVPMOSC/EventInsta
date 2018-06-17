import React, { Component } from "react";
import { Card, Button, Label } from "semantic-ui-react";
import test from "../../helpers/1.jpg";
import LazyImage from "../LazyImage";
import LazyLoad from "react-lazy-load";
import { key } from "../../config/constants"
import cookie from "react-cookies";
import { toast} from 'react-toastify';



export default class SocietyCard extends Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.state ={loading:false}
  }
  handleFollow() {
    // console.log(cookie.load("token"));
    // flow the user with given society

    const token = cookie.load("token")
    // console.log(token)
    const topic = this.props.society.name
    if(token) {
      this.setState({loading:true})
      fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+topic, {
        method: 'POST',
        headers: new Headers({
          'Authorization': 'key='+key,
          'Content-Type':'application/json'
        })
      }).then(response => {
        if (response.status < 200 || response.status >= 400) {
          throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
        }
        this.setState({loading:false})
        toast.success('Subscribed to "'+topic+'"', {
          position: toast.POSITION.TOP_LEFT
        });

      }).catch(error => {
        this.setState({loading:false})
        toast.error("Failed !", {
          position: toast.POSITION.TOP_LEFT
        });

      })
    }
  }
  render() {
    const { name, subtitle, image, poster_url, following, site_link } = this.props.society;
    return (
      <LazyLoad offsetVertical={300}>

        <Card fluid>
          <LazyImage srcPreload={test} srcLoaded={image} height={200} />
          <Card.Content>
            <Card.Header>
              <a href={site_link}>{name}</a>
            </Card.Header>
            <Card.Description>{subtitle}</Card.Description>
          </Card.Content>
          <Card.Content extra>

            <Button
              onClick={this.handleFollow}
              color="blue"
              label={
                <Label basic color="blue">
                  {following}
                </Label>
              }
              // onClick={this.handleFollow}
              icon="feed"
              content={this.state.loading ? "Loading" :"Follow"}
            />
          </Card.Content>
        </Card>
      </LazyLoad>
    );
  }
}
