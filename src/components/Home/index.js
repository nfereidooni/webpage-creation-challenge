import React from "react";
import "./style.css";
import { Container, Image, CardGroup} from "react-bootstrap";
import banner_01 from "../assets/img/preprbanner_01.jpg"
import OneCard from "../OneCard"

function Home() {

  const CODE_DATA_CHALLENGES = [

    {title: "Backend Developer Challenge 1: SQL",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/hn6fd9vCImNkx6Eygm4cNkUnO.png",
    imageAlt: "Backend Developer Challenge icon Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-1-sql"
  },
    {title: "Backend Developer Challenge 2: HTML, CSS and PHP",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/Xmjj54N0oStU9seXcLArlNgpq.png",
    imageAlt: "Backend Developer Challenge icon Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-2-html-css-and-php"
  },
    {title: "Backend Developer Challenge 3: Ruby On Rails",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png",
    imageAlt: "Backend Developer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-3-ruby-on-rails"
  },
    {title: "Backend Developer Challenge 4: JavaScript",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/ogQbXxn46Kp796X8xDnexPYJG.png",
    imageAlt: "Backend Developer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-4-javascript"
  }
  ]

  const CODE_DATA_LABS = [

    {title: "FUN Lab - Winter 2021",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/895imtbPdSuzOstEtgCSJZ7pv.jpg",
    imageAlt: "FUN Winter 2021 logo Banner",
    link: "https://preprlabs.org/labs/fun-lab-winter-2021"
  },
    {title: "Web Developer Career Lab",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/R0gpwVFsCiJdNMwLvsJRMFTwh.png",
    imageAlt: "Web Developer Career Lab Banner",
    link: "https://preprlabs.org/labs/web-developer-career-lab"
  },
    {title: "UX Designer Career Lab",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/01dWNBtgBXu2JjgCDBHySQhoh.png",
    imageAlt: "UX Designer Career Lab Banner",
    link: "https://preprlabs.org/labs/ux-designer-career-lab"
  },
    {title: "Project Manager Career Lab",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/RRnJEtAB8PgMaFVfReVPXWbvn.png",
    imageAlt: "Project Manager Career Lab Banner",
    link: "https://preprlabs.org/labs/project-manager-career-lab"
  }
  ]

  const CODE_DATA_RESOURCES = [

    {title: "The Future of Finance",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/9qhhqIMrnjCCblIUD2oBxSnE6uWoMMttqfK7Cm3G.png",
    imageAlt: "The Future of Finance Resource Banner",
    link: "https://preprlabs.org/resource-module/the-future-of-finance/view"
  },
    {title: "The Future of Hospitality",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/ffOjSMBPNFHXOQCFNtqaby1RascSJrIDjm7so52x.png",
    imageAlt: "The Future of Hospitality Resource Banner",
    link: "https://preprlabs.org/resource-module/the-future-of-hospitality/view"
  },
    {title: "Identifying Future Life Trends In Transportation",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/e85ZYA2owVaNwXAEGkrLH1Dgal5J7l4Ay89nMTTG.png",
    imageAlt: "The Future of Transportation Resource Banner",
    link: "https://preprlabs.org/resource-module/identifying-future-life-trends-in-transportation/view"
  },
    {title: "Global Methane Assessment - Benefits and Costs of Mitigating Methane Emissions",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/GUGkVv7xXA1yYhCcJywOAiV3WBgyTjirQKqcfLNW.png",
    imageAlt: "Global Methane Assessment Resource Banner",
    link: "https://preprlabs.org/resource-module/global-methane-assessment-benefits-and-costs-of-mitigating-methane-emissions/view"
  }
  ]


  return (
    <Container>

      <div className="banner">        
          <Image width="100%" src={banner_01} alt="Green Banner" rounded />
          <div class="centered">Welcome back, Niki Fereidooni!</div>
      </div>

      <div classname="recommendedCards">
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

        <h1>Recommended Labs</h1>

        <CardGroup>
        {CODE_DATA_LABS.map(item => (
                  <OneCard
                  title={item.title}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  />
          ))}
        </CardGroup>

        <h1>Recommended Resources</h1>

        <CardGroup>
        {CODE_DATA_RESOURCES.map(item => (
                  <OneCard
                  title={item.title}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  />
          ))}
        </CardGroup>

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