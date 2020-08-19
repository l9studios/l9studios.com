import React, { useState } from "react";
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

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({
    color: "success",
    isSent: false,
    message: "Mensagem enviada!",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setAlert({
      isSent: false,
    });

    const form = { "form-name": "newsletter", email: email };

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(form),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setAlert({
            color: "success",
            isSent: true,
            message: "Thank you!",
          });
        } else {
          throw response.statusText;
        }
      })
      .catch((error) => {
        console.log(error);

        setAlert({
          color: "warning",
          isSent: true,
          message: "Unable to subscribe! Try again in a few minutes!",
        });
      });
  };

  const onDismiss = () =>
    setAlert({
      isSent: false,
    });

  return (
    <Container>
      <Row>
        <Col>
          <Card className="shadow shadow-lg--hover mt-5">
            <CardBody>
              <h3 className="">Join our newsletter!</h3>
              <p className="lead">
                Subscribe to receive the latest news on asset updates and
                exclusive offers. No spam.
              </p>
              <Alert
                color={alert.color}
                isOpen={alert.isSent}
                toggle={onDismiss}
              >
                {alert.message}
              </Alert>
              <form onSubmit={onSubmit}>
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
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <div>
                  <Button block color="primary" size="lg" type="submit">
                    Subscribe
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
