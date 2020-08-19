import React from "react";

import { Card, CardBody, Container, Row, Col } from "reactstrap";

class ReviewCard extends React.Component {
  render() {
    return (
      <Card className="shadow shadow-lg--hover mt-5">
        <CardBody>
          <div className="d-flex px-3">
            <div>
              <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                <i className={this.props.icon} />
              </div>
            </div>
            <div className="pl-4">
              <h5 className="title text-success">{this.props.title}</h5>
              <h6>by {this.props.author}</h6>
              <p>{this.props.children}</p>
              <a
                className="text-success"
                href={this.props.href}
                onClick={(e) => e.preventDefault()}
              >
                Learn more
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

class Reviews extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>What people are saying...</h4>
            <ReviewCard
              title="Wonderful Unity contributors"
              author="redmeansgo82"
              href="/mpm2d"
              icon="ni ni-satisfied"
            >
              This asset pack is extremely versatile and can be used to
              accomplish a lot of things for making moving platforms. The
              creators even added functionality when I reached out to them about
              accomplishing something the original asset pack wasn't equipped to
              do. A+ experience, across the board. Both the individual asset
              pack and the creators are highly recommended.
            </ReviewCard>
            <ReviewCard
              title="Extremely simple to implement, with all you could think you need."
              author="pudd1nG"
              href="/mpm2d"
              icon="ni ni-trophy"
            >
              When creating a 2d game most people at some point decide to add
              moving platforms. The initial implementation is easy and then over
              the course of development you find small feature such as path
              drawing, path changes and trigger events need to be written and
              suddenly moving platforms in your game is a huge timesink.
              <br />
              This asset solves all of your problems, right away. You've got
              easing curves, dynamic speed, multiple paths, open ends, loops -
              the lot!
              <br />
              Oh, and the path drawing tool is the easiest third party editor
              system I've ever seen and used. The quality of this asset far
              exceed it's price tag.
              <br />
              The developer has been very helpful with updating the asset for
              new Unity versions and his support offerings have already been
              amazing. Great dev!
              <br />
              If you're looking around the asset store for a moving platforms
              solution, THIS IS THE SOLUTION.
            </ReviewCard>
            <ReviewCard
              title="完美的资源！"
              author="hippobob"
              href="/mpm2d"
              icon="ni ni-active-40"
            >
              很棒的插件，为我节省了不少的时间。非常感谢作者，我的游戏上架了！
            </ReviewCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Reviews;
