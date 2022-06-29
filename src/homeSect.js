import React from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";

const HomeSlide = () => {
  return (
    <>
      <div className="home-container">
        <div className="column 1">
          <h1 className="title-home">
            Hi, I'm Taylor and I develop
            <br /> apps and websites.
          </h1>
          <Card>
            <Card.Body className="content-home">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nec erat vel tellus viverra sodales quis vitae lacus. Nam at metus
              justo. Nunc felis purus, ullamcorper a iaculis non, semper ut est.
              Aenean posuere erat sed libero placerat vestibulum. Vestibulum
              vitae neque id sapien ornare placerat vel at libero. Maecenas
              tristique, massa et hendrerit cursus, risus arcu dapibus tortor,
              id viverra arcu dolor eu augue. Morbi ut accumsan tortor.
            </Card.Body>
          </Card>
        </div>
        <div className="column 2">
          <Image src="./images/portrait.png"></Image>
          <div>
            <Button className="content-button">Get in touch</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeSlide;
