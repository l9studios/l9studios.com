import React from "react";
import { Col, Container, Row } from "reactstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MetaTags from "react-meta-tags";
import View from "./View";

class Owners extends View {
  render() {
    return (
      <div ref="main">
        <MetaTags>
          <title>L9 Studios - Unity3D assets for your games</title>
          <meta name="robots" content="noindex,nofollow"></meta>
        </MetaTags>

        <Header />

        <Container>
          <Row>
            <Col>
              <h1>Thank you for your support!</h1>
              <p className="lead">Now you are part of our family!</p>
              <p className="lead">
                We would like to know the games that are made with our assets.
              </p>
              <p className="lead">
                And also we are going to make a featured gallery with the games
                created with our assets and promote them.
              </p>
              <p className="lead">
                If you would like to help us, please answer the form below.
              </p>
              <br/>
              <iframe
                title="ownersform"
                src="https://docs.google.com/forms/d/e/1FAIpQLSclp6dVaGQSgtC8BX_SpOR8qoLQkHYKvaATt281eKLQu6fihA/viewform?embedded=true"
                width="100%"
                height="1168"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading form...
              </iframe>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
export default Owners;
