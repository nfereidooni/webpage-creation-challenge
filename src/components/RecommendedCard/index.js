import React from "react"
import "./style.css";
import { Card } from "react-bootstrap";


function RecommendedCard(props) {

  return(
    <>          
          <Card className="RecommendedCard">
            <Card.Img variant="top" src={props.image} alt={props.imageAlt} />
            <Card.Body>
            <Card.Link href={props.link}>{props.title}</Card.Link>
            </Card.Body>
          </Card>
  </>
  );
}

export default RecommendedCard;