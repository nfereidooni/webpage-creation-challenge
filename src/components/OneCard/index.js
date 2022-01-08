import React, {useState} from "react"
import "./style.css";
import { Card } from "react-bootstrap";


function OneCard(props) {

  return(
    <>          
          <Card classname="card">
            <Card.Img variant="top" src={props.image} alt={props.imageAlt} />
            <Card.Body>
            <Card.Link href={props.link}>{props.title}</Card.Link>
            </Card.Body>
          </Card>
  </>
  );
}

export default OneCard;