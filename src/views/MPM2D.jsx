import React from "react";
import MetaTags from "react-meta-tags";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import View from "./View";

class MPM2D extends View {
  render() {
    return (
      <div ref="main">
        <MetaTags>
          <title>
            Moving Platform Maker 2D - Unity assets for your games
          </title>
          <meta
            name="description"
            content="The perfect solution to easily create 2D moving platforms!"
          />
          <meta
            name="keywords"
            content="moving platforms,moving platform,platform,platformer,unity,unity3d,2d,asset,editor,extension,mario,super mario,easy,simple,best,make,game"
          />
          <meta name="robots" content="index,follow"></meta>
        </MetaTags>

        <div ref="main">
          <Header />
          <Hero
            title="Moving Platform Maker 2D"
            description="The perfect solution to easily create 2D moving platforms!"
          />
          <Container>
            <Row>
              <Col>
                <p>
                  Moving Platform Maker 2D is a Unity editor extension that
                  helps you to create 2D moving platforms the easiest way. It is
                  a must have asset for your 2D platformer game. It will save
                  you tons of work and time.
                </p>

                <p className="mt-5">
                  <Button
                    color="success"
                    href="https://assetstore.unity.com/packages/slug/71886?utm_source=l9studios.com&utm_medium=mpm2d"
                  >
                    Buy it in the Asset Store
                  </Button>
                </p>

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

                <h4>Easily create many types of 2D moving platforms:</h4>
                <ul>
                  <li>Ping pong</li>
                  <li>Closed loop</li>
                  <li>Connected and interchangeable paths</li>
                  <li>Open ended paths</li>
                  <li>Static falling platforms</li>
                  <li>Trigger activated platforms</li>
                  <li>Circular platforms</li>
                  <li>Multiple objects on a path</li>
                </ul>

                <h4>
                  And you are not limited to platforms. You can also animate:
                </h4>
                <ul>
                  <li>Enemies</li>
                  <li>Saw blades</li>
                  <li>Jumping lavas</li>
                  <li>and anything else you can imagine!</li>
                </ul>

                <h4>Play the demos:</h4>

                <Button
                  color="primary"
                  href="/demos/donutplains/"
                  target="_blank"
                >
                  Play Donut Plains 3 Demo
                </Button>

                <Button
                  color="primary"
                  href="/demos/forestfortress/"
                  target="_blank"
                >
                  Play Forest Fortress Demo
                </Button>

                <h4>Related links:</h4>
                <a href="/downloads/UnityChan2D.unitypackage">
                  Download UnityChan2D package
                </a>

                <h4>How to use the asset</h4>

                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="features-demo"
                    src="https://www.youtube.com/embed/Efu_CArrh8Q"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <h4>How to configure Unity Chan 2D</h4>

                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="features-demo"
                    src="https://www.youtube.com/embed/99M2doRuXWw"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <p className="mt-5">
                  <Button
                    color="success"
                    href="https://assetstore.unity.com/packages/slug/71886?utm_source=l9studios.com&utm_medium=mpm2d"
                    block
                  >
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

export default MPM2D;
