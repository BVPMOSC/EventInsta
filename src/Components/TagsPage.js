import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import SocityCard from './SocityCard';
class TagsPage extends Component {
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
                        <Col xs={12} sm={4} md={3} lg={3}>
                            <SocityCard />
                            <h1></h1>
                        </Col>
                         <Col xs={12} sm={4} md={3} lg={3}>
                            <SocityCard />
                            <h1></h1>
                        </Col>
                         <Col xs={12} sm={4} md={3} lg={3}>
                            <SocityCard />
                            <h1></h1>
                        </Col>
                         <Col xs={12} sm={4} md={3} lg={3}>
                            <SocityCard />
                            <h1></h1>
                        </Col>
                         <Col xs={12} sm={4} md={3} lg={3}>
                            <SocityCard />
                            <h1></h1>
                        </Col>
                         <Col xs={12} sm={4} md={3} lg={3}>
                            <SocityCard />
                            <h1></h1>
                        </Col>
                         <Col xs={12} sm={4} md={3} lg={3}>
                            <SocityCard />
                            <h1></h1>
                        </Col>
                         <Col xs={12} sm={4} md={3} lg={3}>
                            <SocityCard />
                            <h1></h1>
                        </Col>

                    </Row>

                </Grid>
            </div>
        )
    }
}

export default TagsPage