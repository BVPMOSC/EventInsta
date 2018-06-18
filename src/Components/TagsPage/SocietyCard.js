import React, { Component } from "react";
import { Card, Button, Label } from "semantic-ui-react";
import test from "../../helpers/1.jpg";
import LazyImage from "../LazyImage";
import LazyLoad from "react-lazy-load";
import { key, ref } from "../../config/constants";
import cookie from "react-cookies";
import { toast } from "react-toastify";

export default class SocietyCard extends Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.state = { loading: false };
  }
  handleFollow() {
    // console.log(cookie.load("token"));
    // flow the user with given society

    const token = cookie.load("token");
    // console.log(token)
    const topic = this.props.society.name;
    if (token) {
      // folow the user
      this.setState({ loading: true });
      if (!this.props.followed) {
        fetch(
          "https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/" + topic,
          {
            method: "POST",
            headers: new Headers({
              Authorization: "key=" + key,
              "Content-Type": "application/json"
            })
          }
        )
          .then(response => {
            if (response.status < 200 || response.status >= 400) {
              // eslint-disable-next-line 
              throw "Error subscribing to topic: " +
                response.status +
                " - " +
                response.text();
            }

            ref
              .child(`/orgs/${this.props.society.key}/followers`)
              .push({ token })
              .then(() => {
                this.setState({ loading: false });
                toast.success('Subscribed to "' + topic + '"', {
                  position: toast.POSITION.TOP_LEFT
                });
              })
              .catch(err => {
                this.setState({ loading: false });
                toast.error("Failed !", {
                  position: toast.POSITION.TOP_LEFT
                });
              });
          })
          .catch(error => {
            this.setState({ loading: false });
            toast.error("Failed !", {
              position: toast.POSITION.TOP_LEFT
            });
          });
      } else {
        if (this.props.followed) {
          console.log("lol")
          fetch(
            "https://iid.googleapis.com/iid/v1/" +
              token +
              "/rel/topics/" +
              topic,
            {
              method: "DELETE",
              headers: new Headers({
                Authorization: "key=" + key,
                "Content-Type": "application/json"
              })
            }
          )
            .then(response => {
              if (response.status < 200 || response.status >= 400) {
                // eslint-disable-next-line
                throw "Error subscribing to topic: " +
                  response.status +
                  " - " +
                  response.text();
              }

              ref
                .child(`/orgs/${this.props.society.key}/followers/${this.props.society.followkey}`)
                .remove()
                .then(() => {
                  this.setState({ loading: false });
                  toast.success('UnSubscribed to "' + topic + '"', {
                    position: toast.POSITION.TOP_LEFT
                  });
                })
                .catch(err => {
                  this.setState({ loading: false });
                  toast.error("Failed !", {
                    position: toast.POSITION.TOP_LEFT
                  });
                });
            })
            .catch(error => {
              this.setState({ loading: false });
              toast.error("Failed !", {
                position: toast.POSITION.TOP_LEFT
              });
            });
        }
      }
    }
  }
  render() {
    const { name, subtitle, image, fcount, site_link } = this.props.society;
    return (
      <LazyLoad offsetVertical={300}>
        <Card fluid className="appstore-card" >
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
                  {fcount? fcount:0}
                </Label>
              }
              // onClick={this.handleFollow}
              icon="feed"
              content={
                this.state.loading
                  ? "Loading"
                  : this.props.followed
                    ? "Unfollow"
                    : "Follow"
              }
            />
          </Card.Content>
        </Card>
      </LazyLoad>
    );
  }
}
