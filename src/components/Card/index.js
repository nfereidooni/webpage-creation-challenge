import React, {useState} from "react"
import "./style.css";
import { CardImg } from "react-bootstrap";


function Card(props) {

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

export default Card;