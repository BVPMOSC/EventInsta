import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SocietyCard from './SocietyCard'
const SocietyList = ({ socities }) => {
    const listItems = socities.map((society) =>
        <Col xs={12} sm={6} md={3} lg={3}>
            <SocietyCard society={society} />
            <h1> </h1>
        </Col>
    );
    return (
        <Row>{listItems}</Row>
    );
}
export default SocietyList