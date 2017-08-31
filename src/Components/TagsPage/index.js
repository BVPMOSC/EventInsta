import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ref } from '../../config/constants'
import SocietyList from './SocietyList'


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