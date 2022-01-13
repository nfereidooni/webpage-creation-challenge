import React  from "react"
import "./style.css";
import { Card } from "react-bootstrap";


function WideCard(props) {

  return(
    <>          
          <Card className="wideCard">
            <Card.Img variant="right" src={props.image} alt={props.imageAlt} />
            <Card.Body>
            <Card.Link href={props.link}>{props.title}</Card.Link>
            </Card.Body>
          </Card>
  </>
  );
}

export default WideCard;