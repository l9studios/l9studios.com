import React from "react";
import Featured from "views/Landing/Featured";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Newsletter from "./Landing/Newsletter";
import Reviews from "./Landing/Reviews";

class LandingB extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Header />
        <main ref="main">
          <section>
            <Hero />
          </section>

          <section>
            <Featured
              asset="mpm2d"
              title="Moving Platform Maker 2D"
              subtitle="The easiest solution to create 2D moving platforms!"
            />
          </section>

          <section>
            <Featured
              asset="supernova"
              title="Supernova"
              subtitle="A complete 2D mobile project ready to publish"
            />
          </section>

          <section className="section">
            <Reviews />
          </section>

          <section className="section bg-gradient-success">
            <Newsletter />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default LandingB;
