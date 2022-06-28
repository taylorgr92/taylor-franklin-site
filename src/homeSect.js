import React from "react";
import { Card } from "react-bootstrap";

const HomeSlide = () => {
  return (
    <div>
      <h1 className="title-home">
        Hi, I'm Taylor and I develop
        <br /> apps and websites.
      </h1>
      <Card className="card-home">
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur
         adipiscing elit. Aenean nec erat vel tellus viverra sodales
          quis vitae lacus. Nam at metus justo. Nunc felis purus, ullamcorper a
          iaculis non, semper ut est. Aenean posuere erat sed libero placerat
          vestibulum. Vestibulum vitae neque id sapien ornare placerat vel at
          libero. Maecenas tristique, massa et hendrerit cursus, risus arcu
          dapibus tortor, id viverra arcu dolor eu augue. Morbi ut accumsan
          tortor.
        </Card.Body>
      </Card>
    </div>
  );
};
export default HomeSlide;
