import React from "react"
import { Card, Col } from "react-bootstrap";


function RecommendedCard(props) {

    let variant = "light"

    if (props.darkMode.value === true) {
      variant = "dark"
    }

  return(
    <Col>          
      <Card className="RecommendedCard" bg={variant} text={variant}>
        <Card.Img variant="top" src={props.image} alt={props.imageAlt} />
        <Card.Body>
        <Card.Link href={props.link}>{props.title}</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RecommendedCard;