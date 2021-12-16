import React from "react";
import "./style.css";
import { Container, Image } from "react-bootstrap";
import banner_01 from "../assets/img/preprbanner_01.jpg"

function Home() {

  return (
    <Container>
        <div className="banner">        
            <Image width="100%" src={banner_01} alt="Green Banner" rounded />
            <div class="centered">Welcome back, Niki Fereidooni!</div>
        </div>
    </Container>
  );
}

export default Home;