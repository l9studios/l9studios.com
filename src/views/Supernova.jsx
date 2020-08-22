import React from "react";
import MetaTags from "react-meta-tags";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import View from "./View";

class Supernova extends View {
  render() {
    const cta = (
      <Button
        color="success"
        href="https://assetstore.unity.com/packages/slug/60883?utm_source=l9studios.com&utm_medium=mpm2d"
        block
      >
        View it in the Asset Store
      </Button>
    );

    return (
      <>
        <MetaTags>
          <title>Supernova - L9 Studios - Unity3D assets for your games</title>
          <meta
            name="description"
            content="A complete 2D mobile project ready to publish"
          />
        </MetaTags>

        <div ref="main">
          <Header />
          <Hero
            title="Supernova"
            description="A complete 2D mobile project ready to publish. It's
        a game of agility and concentration."
          />

          <Container>
            <Row className="justify-content-center">
              <Col>
                <p>{cta}</p>

                <h4>How to play</h4>
                <p>
                  Tap left or right to move the white dwarf star and collect as
                  many planets as you can. Hurry and be careful with black
                  holes, otherwise you will become a supernova.
                </p>

                <h4>Features:</h4>
                <ul>
                  <li>2D infinite tap-to-run game</li>
                  <li>1 scene</li>
                  <li>
                    3 infinite scrolling backgrounds with nebulas / starfield
                  </li>
                  <li>18 unique planet prefabs</li>
                  <li>Unity Analytics integration ready!</li>
                  <li>Fully commented code</li>
                  <li>Mobile first</li>
                  <li>Google Play ready*!</li>
                  <li>Google Play leaderboard: Compete with your friends!</li>
                  <li>
                    Share button: Share a screenshot with your score everywhere.
                  </li>
                  <li>
                    Rate button: Opens the market page for the players to rate
                    your app.
                  </li>
                </ul>

                <p>* Requires Google Play Games Plugin</p>

                <h4>Gameplay :</h4>

                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="gameplay"
                    src="https://www.youtube.com/embed/ec2Ke2R1wUk"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <br />
                <br />
                <p>{cta}</p>
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </>
    );
  }
}
export default Supernova;
