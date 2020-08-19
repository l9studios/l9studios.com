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
  Row
} from "reactstrap";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      alertColor: "success",
      isSent: false,
      message: "Thank you!",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSent: false,
    });

    const form = {
      "form-name": this.props.formName,
      email: this.state.email,
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
            message: "Thank you!",
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
          message: "Unable to subscribe! Try again in a few minutes!",
        });
      });
  };

  onDismiss = () =>
    this.setState({
      isSent: false,
    });

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { alertColor, isSent, message, email } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <h3 className="">{this.props.title}</h3>
                <p className="lead">{this.props.description}</p>
                <Alert
                  color={alertColor}
                  isOpen={isSent}
                  toggle={this.onDismiss}
                >
                  {message}
                </Alert>
                <form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        placeholder="Enter your email :)"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  <div>
                    <Button block color="primary" size="lg" type="submit">
                      {this.props.actionText}
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

EmailForm.defaultProps = {
  formName: "EmailForm",
  title: "Join our EmailForm!",
  description:
    "Subscribe to receive the latest news on asset updates and exclusive offers. No spam.",
  actionText: "Subscribe",
};

export default EmailForm;
