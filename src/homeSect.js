import React from "react";
import { Card, Button, Image } from "react-bootstrap";

const HomeSlide = () => {
  return (
    <>
      <div className="home-container">
        <div className="column-1">
          <h1 className="title-home">
            Hi, I'm Taylor. <br/> I develop
            apps and websites.
          </h1>
          <Card className="profile">
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
        <div className="column-2">
          <Image src="./public/images/my-face.jpg" className= "my-portrait"></Image>
          <div>
            <Button className="intouch-button" onClick={() =>
                  (window.location.href = "mailto:taylorgfranklin@gmail.com")
                }>Get in Touch</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeSlide;
