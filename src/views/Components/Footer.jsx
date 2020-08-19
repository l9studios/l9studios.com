import React from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="12">
                <div className="copyright">
                  Copyright © {new Date().getFullYear()} L9 Studios
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
