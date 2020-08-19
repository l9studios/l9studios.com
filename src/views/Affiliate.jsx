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
import api from "services/api";
import Footer from "./Footer";
import Header from "./Header";

export default function Affiliate() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({
    color: "success",
    isSent: false,
    message: "Mensagem enviada!",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setAlert({
      isSent: false,
    });

    const form = { email };

    try {
      await api.post("/subscribe", form);
      setAlert({
        color: "success",
        isSent: true,
        message: "Inscrito com sucesso!",
      });
    } catch (error) {
      console.log(error);

      setAlert({
        color: "warning",
        isSent: true,
        message:
          "Não foi possível se inscrever! Tente novamente em alguns minutos!",
      });
    }
  };

  const onDismiss = () =>
    setAlert({
      isSent: false,
    });

  return (
    <>
      <Header />
      <section className="section section-lg section-contact-us bg-gradient-success">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <Card clas Name="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h4 className="mb-1">Seja um afiliado!</h4>
                  <p className="mt-0">
                    Gere um link, divulgue e receba comissões pelas vendas.
                  </p>
                  <p className="mt-0">
                    Disponível em breve! Deixe seu email e seja um dos primeiros
                    a saber quando estiver disponível.
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
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <div>
                      <Button block color="warning" size="lg" type="submit">
                        Avise-me
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
