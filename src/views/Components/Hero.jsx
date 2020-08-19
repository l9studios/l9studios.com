import React from "react";
import { Col, Container, Row } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <Container className="py-lg-sm d-flex">
        <Row>
          <Col>
            <h1>{this.props.title}</h1>
            <p className="lead">{this.props.description}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
Hero.defaultProps = {
  title: "Focus on your game...",
  description:
    "Don't reinvent the wheel! Use our assets to make your games faster and your life easier.",
};

export default Hero;
