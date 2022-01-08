import React from "react";
import "./style.css";
import { Container, Image, CardGroup, Card} from "react-bootstrap";
import banner_01 from "../assets/img/preprbanner_01.jpg"
import OneCard from "../OneCard"

function Home() {

  const CODE_DATA_CHALLENGES = [

    {title: "Backend Developer Challenge 1: SQL",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/hn6fd9vCImNkx6Eygm4cNkUnO.png",
    imageAlt: "Backend Developer Challenge icon",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-1-sql"
  },
    {title: "Backend Developer Challenge 2: HTML, CSS and PHP",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/Xmjj54N0oStU9seXcLArlNgpq.png",
    imageAlt: "Backend Developer Challenge icon",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-2-html-css-and-php"
  },
    {title: "Backend Developer Challenge 3: Ruby On Rails",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png",
    imageAlt: "Backend Developer Challenge",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-3-ruby-on-rails"
  },
    {title: "Backend Developer Challenge 4: JavaScript",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/ogQbXxn46Kp796X8xDnexPYJG.png",
    imageAlt: "Backend Developer Challenge",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-4-javascript"
  }
    

  ]



  return (
    <Container>

        <div className="banner">        
            <Image width="100%" src={banner_01} alt="Green Banner" rounded />
            <div class="centered">Welcome back, Niki Fereidooni!</div>
        </div>

        {/* <div className="recommended row">
            <Image src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png" className="col-xs-12 col-md-6 col-lg-4" rounded />
        </div> */}

      <h1>Recommended Challenges</h1>

      <CardGroup>
      {CODE_DATA_CHALLENGES.map(item => (
                <OneCard 
                title={item.title}
                image={item.image}
                imageAlt={item.imageAlt}
                link={item.link}
                />
        ))}
      </CardGroup>


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