import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ref } from '../config/constants'
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RssIcon from 'react-icons/lib/fa/feed';
import cookie from 'react-cookies';
var axios = require('axios')
function SocietyList(props) {
    const socities = props.socities;
    //var admin = require("firebase-admin");
     function handleClick(name) {
         console.log(name);
         console.log('from tag page ' + cookie.load('token'));
         var API_KEY="5vAM:APA91bH_7yI51-aMKMfFEAZDcn1mHREuVRxa-qpW1xRu1urQsOaVOwS-xcyhgG632bpfhuFi9qN3Q1aBVXJJJ4fEKU9E5f6ikqdC1XMhW85vQDnzZnbgy8zTZXsi8nHPtJqcXTOP3sSW";
         var setConfig = { 
            "Authorization": "key="+API_KEY
        }
         

         //subscribe user to the topic and change button to unfollow 
        /*axios.get('https://iid.googleapis.com/iid/info/'+cookie.load('token')+'?details=true', {
                headers: setConfig

         })*/
        axios.post('https://iid.googleapis.com/iid/v1/'+cookie.load('token')+'/rel/topics/'+name, {
                headers: setConfig

         })
             .then(function (response) {
                 console.log(response.status);
             })
             .catch(function (error) {
                 console.log("this is error");
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
             });


     }
    const listItems = socities.map((socity) =>
        <Col xs={12} sm={6} md={3} lg={3}>
            <Card>
                <CardHeader
                    title={socity.name}
                    subtitle={socity.subtitle}
                    avatar={socity.image}
                />
                <CardMedia>
                    <img src={socity.poster_url} alt="" />
                </CardMedia>
                <CardActions>
                    <FlatButton onClick={() => handleClick(socity.name)} label={socity.following + " Following"} primary={true} icon={<RssIcon />} />
                </CardActions>
            </Card>
            <h1> </h1>
        </Col>
    );
    return (
        <Row>{listItems}</Row>
    );
}
class TagsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socities: []
        };

    }

    componentWillMount() {

        var _this = this
        this.ref = ref.child("/orgs")

        this.ref.once('value', function (snapshot) {
            var items = [];
            snapshot.forEach(function (childSnapshot) {
                
                var childData = childSnapshot.val();
                items.push(childData);
                // ...
            });

            _this.setState({
                socities: items
            });

        });
    }


    componentWillUnmount() {
        this.ref.off();
    }


    render() {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <h1> </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <h1> </h1>
                        </Col>
                    </Row>
                
                        <SocietyList socities={this.state.socities} />
                 

                </Grid>
            </div>
        )
    }
}

export default TagsPage