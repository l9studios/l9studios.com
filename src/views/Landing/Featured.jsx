import React from "react";
import { Link } from "react-router-dom";

class Featured extends React.Component {
  render() {
    const asset = "/" + this.props.asset;
    const background = require("assets/img" + asset + ".jpg");
    return (
      <Link to={asset}>
        <article className="hero-case animate fadeInUp one">
          <section>
            <h1 className="hero-text">{this.props.title}</h1>
            <h3 className="hero-text">{this.props.subtitle}</h3>
          </section>
          <div
            className="hero-background"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
        </article>
      </Link>
    );
  }
}
Featured.defaultProps = {
  subtitle: "",
};

export default Featured;
