import { React, useState } from "react";
import "./style.css";
import { Container, Image, CardGroup, Button, Tabs, Tab} from "react-bootstrap";
import banner_01 from "../assets/img/preprbanner_01.jpg"
import RecommendedCard from "../RecommendedCard"
import WideCard from "../WideCard"

function Home() {

  const [key, setKey] = useState('challenges');

  const CODE_DATA_CHALLENGES = [

    {title: "Backend Developer Challenge 1: SQL",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/hn6fd9vCImNkx6Eygm4cNkUnO.png",
    imageAlt: "Backend Developer Challenge icon Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-1-sql",
    recommended: "yes",
    type: "Challenge",
    description: "Introduction: SQL is a query language that is used to interact with databases. It is a Domain Specific Language, meaning it is a specialized language that is used for working with data in databases."
  },
    {title: "Backend Developer Challenge 2: HTML, CSS and PHP",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/Xmjj54N0oStU9seXcLArlNgpq.png",
    imageAlt: "Backend Developer Challenge icon Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-2-html-css-and-php",
    recommended: "yes",
    type: "Challenge",
    description: "Introduction: HTML is the basis for all web pages on the internet and CSS dictates how HTML elements will be displayed. In this challenge you will be given a template for a basic web page you will also use PHP to create a search functionality for the website."
  },
    {title: "Backend Developer Challenge 3: Ruby On Rails",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/gekFqWWbKv9XP9Bjh40HoDEFM.png",
    imageAlt: "Backend Developer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-3-ruby-on-rails",
    recommended: "yes",
    type: "Challenge",
    description: "Introduction: Ruby is an open-source object-oriented scripting language that is used in both front-end and back-end development to build web applications. It also has applications such as data analysis and prototyping."
  },
    {title: "Backend Developer Challenge 4: JavaScript",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/ogQbXxn46Kp796X8xDnexPYJG.png",
    imageAlt: "Backend Developer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/backend-developer-challenge-4-javascript",
    recommended: "yes",
    type: "Challenge",
    description: "Introduction: JavaScript is an interpreted scripting language that is used to make web pages interactive and program webpage behaviour. JavaScript is run from inside HTML web pages, so it must be called from within the webpage to run."
  },
    {title: "UX Designer Challenge 1: User Research",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/Sw8lephTlNGlM4WU8avBMkHCX.png",
    imageAlt: "UX Designer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/ux-designer-challenge-1-user-research",
    recommended: "no",
    type: "Challenge",
    description: "A UX designer is responsible for designing, or assisting in the design, of a website or application; their job is to optimize the application or website for user experience (UX). UX design puts people at the centre of design thinking."
  },
    {title: "UX Designer Challenge 2: Information Architecture",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/KvHhcAgUWzPgwJedCEgZlilHC.png",
    imageAlt: "UX Designer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/ux-designer-challenge-2-information-architecture",
    recommended: "no",
    type: "Challenge",
    description: "Information architecture (sometimes shortened to IA) is a way of communicating and designing the structure of a website or application. Information architecture can often look like a sort of flow chart."
  },
    {title: "UX Designer Challenge 3: Wireframing",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/odrZggQeL1yLcjCmPSBqHtHJX.png",
    imageAlt: "UX Designer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/ux-designer-challenge-3-wireframing",
    recommended: "no",
    type: "Challenge",
    description: "What is a wireframe? A wireframe is an outline or blueprint for a website or application. This blueprint will communicate the information hierarchy of the proposed digital solution and dictate what goes where."
  },
    {title: "UX Designer Challenge 4: User Experience Testing",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/SubYh0bZ1evYDqCAKOtgIQ2f3.png",
    imageAlt: "UX Designer Challenge Banner",
    link: "https://preprlabs.org/challengeManager/ux-designer-challenge-4-user-experience-testing",
    recommended: "no",
    type: "Challenge",
    description: "User testing is an essential part of any development process and an essential part of a UX designers role. User testing allows a UX designer to create further iterations of their design and to improve their design for better optimization."
  }
  ]

  const CODE_DATA_LABS = [

    {title: "FUN Lab - Winter 2021",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/895imtbPdSuzOstEtgCSJZ7pv.jpg",
    imageAlt: "FUN Winter 2021 logo Banner",
    link: "https://preprlabs.org/labs/fun-lab-winter-2021",
    recommended: "yes",
    type: "Lab",
    description: "Welcome to the Winter 2021 cohort of the F.U.N. program! We are so excited to help you launch your career over the next few months. This Lab is going to be your resource hub where we will be sharing resources and key updates. Check back regularly!"
  },
    {title: "Web Developer Career Lab",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/R0gpwVFsCiJdNMwLvsJRMFTwh.png",
    imageAlt: "Web Developer Career Lab Banner",
    link: "https://preprlabs.org/labs/web-developer-career-lab",
    recommended: "yes",
    type: "Lab",
    description: ""
  },
c
    {title: "Project Manager Career Lab",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/RRnJEtAB8PgMaFVfReVPXWbvn.png",
    imageAlt: "Project Manager Career Lab Banner",
    link: "https://preprlabs.org/labs/project-manager-career-lab",
    recommended: "yes",
    type: "Lab",
    description: ""
  }
  ]

  const CODE_DATA_RESOURCES = [

    {title: "The Future of Finance",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/9qhhqIMrnjCCblIUD2oBxSnE6uWoMMttqfK7Cm3G.png",
    imageAlt: "The Future of Finance Resource Banner",
    link: "https://preprlabs.org/resource-module/the-future-of-finance/view",
    type: "Resource",
    recommended: "yes"
  },
    {title: "The Future of Hospitality",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/ffOjSMBPNFHXOQCFNtqaby1RascSJrIDjm7so52x.png",
    imageAlt: "The Future of Hospitality Resource Banner",
    link: "https://preprlabs.org/resource-module/the-future-of-hospitality/view",
    type: "Resource",
    recommended: "yes"
  },
    {title: "Identifying Future Life Trends In Transportation",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/e85ZYA2owVaNwXAEGkrLH1Dgal5J7l4Ay89nMTTG.png",
    imageAlt: "The Future of Transportation Resource Banner",
    link: "https://preprlabs.org/resource-module/identifying-future-life-trends-in-transportation/view",
    type: "Resource",
    recommended: "yes"
  },
    {title: "Global Methane Assessment - Benefits and Costs of Mitigating Methane Emissions",
    image: "https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/resources/image/GUGkVv7xXA1yYhCcJywOAiV3WBgyTjirQKqcfLNW.png",
    imageAlt: "Global Methane Assessment Resource Banner",
    link: "https://preprlabs.org/resource-module/global-methane-assessment-benefits-and-costs-of-mitigating-methane-emissions/view",
    type: "Resource",
    recommended: "yes"
  }
  ]

// Filter recommended data

  const searchTextYes = 'yes';
  const recChallenges = CODE_DATA_CHALLENGES.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(searchTextYes));
  });

  const recLabs = CODE_DATA_LABS.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(searchTextYes));
  });

  const recResources = CODE_DATA_RESOURCES.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(searchTextYes));
  });

// Filter recommended out of rest of data

  const searchTextNo = 'no';
  const notRecChallenges = CODE_DATA_CHALLENGES.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(searchTextNo));
  });

  const notRecLabs = CODE_DATA_LABS.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(searchTextNo));
  });

  return (
    <Container>

      <div className="banner">        
          <Image width="100%" src={banner_01} alt="Green Banner" rounded />
          <div class="centered">Welcome back, Niki Fereidooni!</div>
      </div>

      <div classname="recommendedCards">
        <h1>Recommended Challenges</h1>

        <CardGroup>

          
        {recChallenges.map(item => (
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
        {recLabs.map(item => (
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
        {recResources.map(item => (
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
        {notRecChallenges.map(item => (
                  <WideCard
                  title={item.title}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  type={item.type}
                  description={item.description}
                  />
          ))}
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