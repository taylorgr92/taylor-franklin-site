import React from "react";
import { Col, Row, Container, Card, Image} from "react-bootstrap";

const SkillSect= () => {
    return(
   <>
      <Container>
        <div>Libraries</div>
        <Row>
          <Col><Card className= "libraries"><Card.Title>ReactJS</Card.Title><Image src="./images/reactjs.png" alt= "ReactJS logo" className= "language"></Image></Card>
          </Col>
          <Col><Card className= "libraries"><Card.Title>HTML</Card.Title><Image src= "./images/html-logo.png" alt= "HTML logo" className= "language"></Image></Card>
          </Col>

          <Col><Card className= "libraries"><Card.Title>CSS</Card.Title><Image src= "./images/css-logo.png" alt= "CSS logo" className= "language"></Image></Card>
          </Col>

          <Col><Card className= "libraries"><Card.Title>JavaScript</Card.Title><Image src= "./images/js.png" alt="Bootstrap logo"></Image></Card>
          </Col>
          <Col><Card className= "libraries"><Card.Title>Framer Motion</Card.Title><Image src="./images/framer-motion-logo.png" alt= "Framer Motion logo" classname= "language"></Image></Card></Col>
        </Row>
      </Container>

      <div>Tools and Frameworks</div>
      <Container>
        <Row>
        <Col><Card className= "framework"><Card.Title>MongoDB</Card.Title></Card>
          </Col>

          
          <Col><Card className= "framework"><Card.Title>Express</Card.Title></Card>
          </Col>
          <Col><Card className= "framework"><Card.Title>nodeJS</Card.Title></Card></Col>
          <Col><Card className= "framework"><Card.Title>Bootstrap</Card.Title></Card>
   </Col>
   
        </Row>
      </Container>
      </>
    )
};

export default SkillSect;
