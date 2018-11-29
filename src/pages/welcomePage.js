import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page">
        <Row>
          <Col xs="6">
            <Button color="warning">Login</Button>
          </Col>
          <Col xs="6">
            <Button color="warning">Sign Up</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WelcomePage;