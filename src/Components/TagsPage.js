import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ref } from '../config/constants'
import { Card, CardActions, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RssIcon from 'react-icons/lib/fa/feed';
import CloseIcon from 'react-icons/lib/fa/close'
function SocietyList(props) {
    const socities = props.socities;
    const listItems = socities.map((socity) =>
        <Col xs={12} sm={4} md={3} lg={3}>
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
                    <FlatButton label={socity.following + " Following"} primary={true} icon={<RssIcon />} />
                </CardActions>
            </Card>
            <h1></h1>
        </Col>
    );
    return (
        <div>{listItems}</div>
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
                var childKey = childSnapshot.key;
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
                            <h1></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <h1></h1>
                        </Col>
                    </Row>
                    <Row>
                        <SocietyList socities={this.state.socities} />
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default TagsPage