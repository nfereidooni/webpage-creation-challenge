import { React, useState } from "react";
import "./style.css";
import { Container, Image, Card, CardGroup, Button, Tabs, Tab} from "react-bootstrap";
import banner_01 from "../assets/img/preprbanner_01.jpg"
import RecommendedCard from "../RecommendedCard"

function Home() {

  const [key, setKey] = useState('challenges');

  const CODE_DATA_CHALLENGES = [

    {title: "Backend Developer Challenge 1: SQL",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/hn6fd9vCImNkx6Eygm4cNkUnO.png",
    imageAlt: "Backend Developer Challenge icon Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-1-sql",
    recommended: "yes",
    description: "Introduction: SQL is a query language that is used to interact with databases. It is a Domain Specific Language, meaning it is a specialized language that is used for working with data in databases."
  },
    {title: "Backend Developer Challenge 2: HTML, CSS and PHP",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/Xmjj54N0oStU9seXcLArlNgpq.png",
    imageAlt: "Backend Developer Challenge icon Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-2-html-css-and-php",
    recommended: "yes",
    description: "Introduction: HTML is the basis for all web pages on the internet and CSS dictates how HTML elements will be displayed. In this challenge you will be given a template for a basic web page you will also use PHP to create a search functionality for the website."
  },
    {title: "Backend Developer Challenge 3: Ruby On Rails",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png",
    imageAlt: "Backend Developer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-3-ruby-on-rails",
    recommended: "yes",
    description: "Introduction: Ruby is an open-source object-oriented scripting language that is used in both front-end and back-end development to build web applications. It also has applications such as data analysis and prototyping."
  },
    {title: "Backend Developer Challenge 4: JavaScript",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/ogQbXxn46Kp796X8xDnexPYJG.png",
    imageAlt: "Backend Developer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-4-javascript",
    recommended: "yes",
    description: "Introduction: JavaScript is an interpreted scripting language that is used to make web pages interactive and program webpage behaviour. JavaScript is run from inside HTML web pages, so it must be called from within the webpage to run."
  }
  ]

  const CODE_DATA_LABS = [

    {title: "FUN Lab - Winter 2021",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/895imtbPdSuzOstEtgCSJZ7pv.jpg",
    imageAlt: "FUN Winter 2021 logo Banner",
    link: "https://preprlabs.org/labs/fun-lab-winter-2021",
    recommended: "yes",
    description: "Welcome to the Winter 2021 cohort of the F.U.N. program! We are so excited to help you launch your career over the next few months. This Lab is going to be your resource hub where we will be sharing resources and key updates. Check back regularly!"
  },
    {title: "Web Developer Career Lab",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/R0gpwVFsCiJdNMwLvsJRMFTwh.png",
    imageAlt: "Web Developer Career Lab Banner",
    link: "https://preprlabs.org/labs/web-developer-career-lab",
    recommended: "yes",
    description: ""
  },
    {title: "UX Designer Career Lab",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/01dWNBtgBXu2JjgCDBHySQhoh.png",
    imageAlt: "UX Designer Career Lab Banner",
    link: "https://preprlabs.org/labs/ux-designer-career-lab",
    recommended: "yes",
    description: ""
  },
    {title: "Project Manager Career Lab",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/RRnJEtAB8PgMaFVfReVPXWbvn.png",
    imageAlt: "Project Manager Career Lab Banner",
    link: "https://preprlabs.org/labs/project-manager-career-lab",
    recommended: "yes",
    description: ""
  }
  ]

  const CODE_DATA_RESOURCES = [

    {title: "The Future of Finance",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/9qhhqIMrnjCCblIUD2oBxSnE6uWoMMttqfK7Cm3G.png",
    imageAlt: "The Future of Finance Resource Banner",
    link: "https://preprlabs.org/resource-module/the-future-of-finance/view",
    recommended: "yes"
  },
    {title: "The Future of Hospitality",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/ffOjSMBPNFHXOQCFNtqaby1RascSJrIDjm7so52x.png",
    imageAlt: "The Future of Hospitality Resource Banner",
    link: "https://preprlabs.org/resource-module/the-future-of-hospitality/view",
    recommended: "yes"
  },
    {title: "Identifying Future Life Trends In Transportation",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/e85ZYA2owVaNwXAEGkrLH1Dgal5J7l4Ay89nMTTG.png",
    imageAlt: "The Future of Transportation Resource Banner",
    link: "https://preprlabs.org/resource-module/identifying-future-life-trends-in-transportation/view",
    recommended: "yes"
  },
    {title: "Global Methane Assessment - Benefits and Costs of Mitigating Methane Emissions",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/GUGkVv7xXA1yYhCcJywOAiV3WBgyTjirQKqcfLNW.png",
    imageAlt: "Global Methane Assessment Resource Banner",
    link: "https://preprlabs.org/resource-module/global-methane-assessment-benefits-and-costs-of-mitigating-methane-emissions/view",
    recommended: "yes"
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
                  <RecommendedCard
                  title={item.title}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  />
          ))}
        </CardGroup>
        
        <div className="text-right">
          <Button className="exploreMoreButton" variant="outline-success">Explore More Challenges</Button>{' '}
        </div>

        <h1>Recommended Labs</h1>

        <CardGroup>
        {CODE_DATA_LABS.map(item => (
                  <RecommendedCard
                  title={item.title}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  />
          ))}
        </CardGroup>

        <div className="text-right">
          <Button className="exploreMoreButton" variant="outline-success">Explore More Labs</Button>{' '}
        </div>

        <h1>Recommended Resources</h1>

        <CardGroup>
        {CODE_DATA_RESOURCES.map(item => (
                  <RecommendedCard
                  title={item.title}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  />
          ))}
        </CardGroup>

        <div className="text-right">
          <Button className="exploreMoreButton" variant="outline-success">Explore More Resources</Button>{' '}
        </div>

      </div>
      
      <div className="explore">

      <h1>Explore</h1>

      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="exploreTabs mb-3 text-center"
    >
        <Tab eventKey="challenges" title="Challenges">
          {/* <Sonnet /> */}
          <p>test test</p>
          <CardGroup>
            <Card className="wideCard" style={{ maxWidth: '540px'}}>
              <div className="row g-0">
                <div className="col-4">
                  <Card.Img variant="right" src="https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/hn6fd9vCImNkx6Eygm4cNkUnO.png" alt="Backend Developer Challenge icon Banner" />
                </div>
                <div className="col-8">
                  <Card.Body>
                    <Card.Link href="https://preprlabs.org/challengeManager/backend-developer-challenge-1-sql">Backend Developer Challenge 1: SQL</Card.Link>
                    <Card.Text>Introduction: SQL is a query language that is used to interact with databases. It is a Domain Specific Language, meaning it is a specialized language that is used for working with data in databases.</Card.Text>
                  </Card.Body>
                </div>
              </div> 
            </Card>
          </CardGroup>
        </Tab>
        <Tab eventKey="labs" title="Labs">
          <p>more tests</p>
        </Tab>
        <Tab eventKey="projects" title="Projects">
          <p>even more tests</p>
        </Tab>
      </Tabs>
      
      </div>

    </Container>
  );
}

export default Home;