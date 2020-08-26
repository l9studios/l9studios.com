import React from "react";
import MetaTags from "react-meta-tags";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import View from "./View";

class MPM2D extends View {
  render() {
    const cta = (
      <Button
        color="success"
        href="https://assetstore.unity.com/packages/slug/71886?utm_source=l9studios.com&utm_medium=mpm2d"
        block
      >
        View it in the Asset Store
      </Button>
    );

    return (
      <>
        <MetaTags>
          <title>
            Moving Platform Maker 2D - L9 Studios - Unity3D assets for your
            games
          </title>
          <meta
            name="description"
            content="The easiest solution to create 2D moving platforms!"
          />
        </MetaTags>

        <div ref="main">
          <Header />
          <Hero
            title="Moving Platform Maker 2D"
            description="The easiest solution to create 2D moving platforms!"
          />
          <Container>
            <Row className="justify-content-center">
              <Col>
                <p>{cta}</p>

                <h4 className="mt-0">Easily create...</h4>
                <ul>
                  <li>Many types of moving platforms</li>
                  <li>Enemies</li>
                  <li>Saw blades</li>
                  <li>Jumping lavas</li>
                  <li>There is no limit for your imagination!</li>
                </ul>

                <h4>Take a look at the features in this quick video:</h4>

                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="features-demo"
                    src="https://www.youtube.com/embed/0edsaUPs-OE"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <h4>Try it yourself:</h4>

                <Button
                  color="primary"
                  href="https://l9studios.com/demos/donutplains/"
                  target="_blank"
                >
                  Play Donut Plains 3 Demo
                </Button>

                <Button
                  color="primary"
                  href="https://l9studios.com/demos/forestfortress/"
                  target="_blank"
                >
                  Play Forest Fortress Demo
                </Button>

                <br />
                <h4>Downloads:</h4>
                <a href="/downloads/UnityChan2D.unitypackage">
                  Download UnityChan2D package
                </a>
                <br />
                <h4>Video guides:</h4>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="features-demo"
                    src="https://www.youtube.com/embed/99M2doRuXWw"
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

export default MPM2D;
