import React from "react";
import "./style.css";
import { Container, Image, CardGroup, Card} from "react-bootstrap";
import banner_01 from "../assets/img/preprbanner_01.jpg"

function Home() {

  return (
    <Container>

        <div className="banner">        
            <Image width="100%" src={banner_01} alt="Green Banner" rounded />
            <div class="centered">Welcome back, Niki Fereidooni!</div>
        </div>

        {/* <div className="recommended row">
            <Image src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png" className="col-xs-12 col-md-6 col-lg-4" rounded />
        </div> */}

      <div className="row portfolioContainer">

      {sortedData.map(item => (
        <div className="col-xs-12 col-md-6 col-lg-4">
                <Card 
                title={item.title}
                image={item.image}
                imageAlt={item.imageAlt}
                link={item.link}
                />
        </div>
        ))}
      </div>

        {/* <CardGroup>
          <Card classname="card">
            <Card.Img variant="top" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png" />
            <Card.Body>
            <Card.Link href="#">Backend Developer Challenge 3: Ruby On Rails</Card.Link>
            </Card.Body>
          </Card>
          <Card classname="card">
            <Card.Img variant="top" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png" />
            <Card.Body>
            <Card.Link href="#">Backend Developer Challenge 3: Ruby On Rails</Card.Link>
            </Card.Body>
          </Card>
          <Card classname="card">
            <Card.Img variant="top" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png" />
            <Card.Body>
            <Card.Link href="#">Backend Developer Challenge 3: Ruby On Rails</Card.Link>
            </Card.Body>
          </Card>
        </CardGroup> */}



    </Container>
  );
}

export default Home;