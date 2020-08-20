import React from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      alertColor: "success",
      isSent: false,
      alertMessage: "Thank you!",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSent: false,
    });

    const form = {
      "form-name": 'contact',
      email: this.state.email,
      name: this.state.name,
      message: this.state.message,
    };

    console.log(form);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(form),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          this.setState({
            alertColor: "success",
            isSent: true,
            alertMessage: "Thank you!",
          });
        } else {
          throw response.statusText;
        }
      })
      .catch((error) => {
        console.log(error);

        this.setState({
          alertColor: "warning",
          isSent: true,
          alertMessage: "Unable to send the message! Try again in a few minutes!",
        });
      });
  };

  onDismiss = () =>
    this.setState({
      isSent: false,
    });

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      alertColor,
      isSent,
      alertMessage,
      email,
      name,
      message,
    } = this.state;
    return (
      <>
        <Header />

        <section className="section section-lg section-contact-us bg-gradient-success">
          <Container id={"contact"}>
            <Row className="justify-content-center">
              <Col>
                <Card className="bg-gradient-secondary shadow">
                  <CardBody>
                    <h4 className="mb-1">Contact us</h4>
                    <p className="mt-0">
                      Fill the form or send a direct email to{" "}
                      <a href="mailto:contact@l9studios.com">
                        contact@l9studios.com
                      </a>
                    </p>
                    <Alert
                      color={alertColor}
                      isOpen={isSent}
                      toggle={this.onDismiss}
                    >
                      {alertMessage}
                    </Alert>
                    <form onSubmit={this.onSubmit}>
                      <FormGroup className="mt-5">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="name"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={this.handleChange}
                            required
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="message"
                          placeholder="Your message..."
                          rows="10"
                          type="textarea"
                          value={message}
                          onChange={this.handleChange}
                          required
                        />
                      </FormGroup>
                      <div>
                        <Button block color="primary" size="lg" type="submit">
                          Send
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    );
  }
}
export default Contact;
