import React from "react";
import Featured from "views/Landing/Featured";
import EmailForm from "./Components/EmailForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Reviews from "./Landing/Reviews";
import MetaTags from "react-meta-tags";

class Landing extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MetaTags>
          <title>L9 Studios - Unity3D assets for your games</title>
          <meta
            name="description"
            content="Make your Unity3D game development faster and easier with our assets"
          />
          <meta
            name="keywords"
            content="unity,unity 3d,2d,asset,editor,extension,easy,simple,best,make,game,dev"
          />
        </MetaTags>

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
            <EmailForm />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Landing;
