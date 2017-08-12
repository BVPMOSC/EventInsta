import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { firebaseAuth } from '../config/constants'
import { ref } from '../config/constants'
const style = {
    margin: 12,
};
function handleSend(state) {
    var eventref = ref.child("/events");
    eventref.push(state)
}
class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin_name: "",
            admin_avatar_url: "",
            event_heading: "",
            sub_heading: "",
            tag: "",
            image: "",
            going: 0,
            uid: 1

        };
        console.log(props)

    }




    componentWillMount() {
        firebaseAuth().onAuthStateChanged((user) => {
            console.log(user.photoURL)
            if (user) {
                this.setState({
                    admin_name: user.displayName,
                    admin_avatar_url: user.photoURL,

                })

            } else {
                this.setState({
                    admin_name: "",
                    admin_avatar_url: "",
                })
            }
        });
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
                            <TextField
                                id="addevent_heading"
                                onChange={(e, newvalue) => { this.setState({ event_heading: newvalue }) }}
                                hintText="Event name"
                            />
                            <br />
                            <br />
                            <TextField
                                id="addsub_heading"
                                onChange={(e, newvalue) => { this.setState({ sub_heading: newvalue }) }}
                                hintText="Sub heading"
                            />
                            <br />
                            <br />
                            <TextField
                                id="addSName"
                                onChange={(e, newvalue) => { this.setState({ tag: newvalue }) }}
                                hintText="Society name"
                            />
                            <br />
                            <br />
                            <TextField
                                id="addimage"
                                onChange={(e, newvalue) => { this.setState({ image: newvalue }) }}
                                hintText="Event poster url"
                            />
                            <br />
                            <br />
                            <RaisedButton label="Add Event" primary={true} style={style} onTouchTap={(e) => { var st = this.state; handleSend(st) }} />
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default AddPage