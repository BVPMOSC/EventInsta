import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
class AddPage extends Component {
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
                                hintText="Event name"
                            />
                            <br />
                            <br />
                            <TextField
           
                                hintText="Sub heading"
                            />
                            <br />
                            <br />
                            <TextField
                                hintText="Event poster url"
                            />
                            <br />
                            <br />

                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default AddPage