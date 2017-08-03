import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import EventCard from './EventCard';
class LatestEvents extends Component {
    render () {
        return (
            <div>
                 <Grid fluid>
            <Row>
              <Col xs={12} md={12} lg={12}>
                <h1></h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                <h1></h1>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                <h1></h1>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                 <h1></h1>
              </Col>
               <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                 <h1></h1>
              </Col>
               <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                 <h1></h1>
              </Col>
               <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                 <h1></h1>
              </Col>
               <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                 <h1></h1>
              </Col>
               <Col xs={12} sm={6} md={4} lg={4}>
                <EventCard />
                 <h1></h1>
              </Col>
             
            </Row>
    
          </Grid>
        
            </div>
        )
    }
}

export default LatestEvents