import React from "react";
import { Card, Button } from "react-bootstrap";

const HomeSlide = () => {
  return (
    <div>
      <div className="container home">
        <h1 className="title-home">
          Hi, I'm Taylor and I develop
          <br /> apps and websites.
        </h1>
       
        <Card>
          <Card.Body className="content-home">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
            erat vel tellus viverra sodales quis vitae lacus. Nam at metus
            justo. Nunc felis purus, ullamcorper a iaculis non, semper ut est.
            Aenean posuere erat sed libero placerat vestibulum. Vestibulum vitae
            neque id sapien ornare placerat vel at libero. Maecenas tristique,
            massa et hendrerit cursus, risus arcu dapibus tortor, id viverra
            arcu dolor eu augue. Morbi ut accumsan tortor.
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default HomeSlide;
