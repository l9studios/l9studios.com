import React from "react";
import MetaTags from "react-meta-tags";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import View from "./View";

class Supernova extends View {
  render() {
    const link =
      "https://assetstore.unity.com/packages/templates/systems/supernova-template-60883?aid=1101ldWRa&utm_source=l9studios.com&utm_medium=mpm2d";

    return (
      <div ref="main">
        <MetaTags>
          <title>Supernova - Unity assets for your games</title>
          <meta
            name="description"
            content="A complete 2D mobile project ready to publish"
          />
          <meta
            name="keywords"
            content="mobile,game,template,unity,unity3d,2d,asset,easy,simple,best,make"
          />
          <meta name="robots" content="index,follow"></meta>
        </MetaTags>

        <div ref="main">
          <Header />
          <Hero
            title="Supernova"
            description="Supernova is a complete mobile game template made in Unity for you to jumpstart your game development."
          />

          <Container>
            <Row>
              <Col>
                <p>
                  Tap left or right to move the white dwarf star and collect as
                  many planets as you can. Hurry and be careful with black
                  holes, otherwise you will become a supernova.
                </p>

                <p className="mt-5">
                  <Button color="success" href={link}>
                    Buy it in the Asset Store
                  </Button>
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

                <Button
                  color="primary"
                  href="/demos/supernova/"
                  target="_blank"
                >
                  Play Demo
                </Button>

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

                <p className="mt-5">
                  <Button color="success" href={link} block>
                    Buy it in the Asset Store
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </div>
    );
  }
}
export default Supernova;
