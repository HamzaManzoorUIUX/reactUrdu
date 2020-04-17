import React from 'react'
// import Slider from './mySlider'
import {Container, Row, Col  } from 'react-bootstrap';
// import Section from './Section'
// import NavBar from './NavBar';
// import TopBar from './TopBar';
import Adds from '../common/Adds';

export default function Home() {
    return (
        <div>
          {/* <TopBar/> */}
          {/* <NavBar/> */}
            {/* <Slider/> */}
        <Container>
    <Row className="myFont">
      <Col md={9}>
        {/* <Section/> */}
      </Col>
      <Col md={3}>
        <Adds/>
      </Col>
    </Row>
  </Container>
        </div>
    )
}
