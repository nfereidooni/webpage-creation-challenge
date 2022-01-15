import React from "react"
import "./style.css";
import { Card, Col } from "react-bootstrap";


function RecommendedCard(props) {

  return(
    <Col>          
      <Card className="RecommendedCard">
        <Card.Img variant="top" src={props.image} alt={props.imageAlt} />
        <Card.Body>
        <Card.Link href={props.link}>{props.title}</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RecommendedCard;
