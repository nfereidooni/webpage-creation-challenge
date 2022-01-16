import React from "react";
import "./style.css";
import { Container, Navbar, Nav, NavDropdown, Image, Form, Button, FormControl } from "react-bootstrap";
import userImage from "../assets/img/IMG_Niki.jpg"

function Header(props) {

  // console.log(props.darkMode.value)

  let variant = "light"

  if (props.darkMode.value === true) {
    variant = "dark"
  }

  return (
    <Container>
      <Navbar className="Navbar-main"
        collapseOnSelect
        expand="lg"
        bg={variant}
        variant={variant}
        fixed="top"
      >
        <Container fluid>
            <Navbar.Brand href="http://www.preprlabs.org" className="navbarBrand">
                <Image className="logo" src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/logo.png"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mt-1 mt-lg-0">
                <NavDropdown className="dashboardLink" id="collaspible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-binoculars"></i>&nbsp;Explore</div>}>
                    <NavDropdown.Item href="#"><i class="fas fa-flask"></i>&nbsp;&nbsp;Labs</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-puzzle-piece"></i>&nbsp;&nbsp;Challenges</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-briefcase"></i>&nbsp;&nbsp;Organizations</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-journal-whills"></i>&nbsp;&nbsp;Resources</NavDropdown.Item>
                </NavDropdown>              
                <NavDropdown className="dashboardLink" id="collapsible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-tachometer-alt"></i> My Dashboard </div>}>
                    <NavDropdown.Item href="#"><i class="fas fa-user"></i>&nbsp;&nbsp;User Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-project-diagram"></i>&nbsp;&nbsp;Projects</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-user-friends"></i>&nbsp;&nbsp;Team Matching</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-medal"></i>&nbsp;&nbsp;Achievements</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="dashboardLink" id="collapsible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-cog"></i> Manage </div>} >
                    <NavDropdown.Item href="#"><i class="fas fa-user"></i>&nbsp;&nbsp;Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-cog"></i>&nbsp;&nbsp;Settings</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Challenges, Labs, Projects and People"
                className="form-control me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><i class="fa fa-search"></i></Button>
            </Form>
            <Nav className="ml-1 mt-1 pl-lg-5 mt-lg-0">
                <NavDropdown className="userMenu" id="collapsible-nav-dropdown" title={<div style={{display: "inline-block"}}><Image src={userImage} width="40" roundedCircle/></div>}>
                    <NavDropdown.Item className="userMenuItem" href="#"><i class="fas fa-user"></i>&nbsp;&nbsp;My Info</NavDropdown.Item>
                    <NavDropdown.Item className="userMenuItem" href="#"><i class="fas fa-question-circle"></i>&nbsp;&nbsp;Help</NavDropdown.Item>
                    <NavDropdown.Item className="userMenuItem" href="#"><i class="fas fa-inbox"></i>&nbsp;&nbsp;Inbox</NavDropdown.Item>
                    <NavDropdown.Item className="userMenuItem" href="#"><i class="far fa-newspaper"></i>&nbsp;&nbsp;Newsfeed</NavDropdown.Item>
                    <NavDropdown.Item className="userMenuItem" href="#"><i class="far fa-bell"></i>&nbsp;&nbsp;Notifications</NavDropdown.Item>
                    <NavDropdown.Item className="userMenuItem" href="#"><i class="fas fa-cog"></i>&nbsp;&nbsp;Settings</NavDropdown.Item>
                    <NavDropdown.Item className="userMenuItem" href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>       
            </Navbar.Collapse>

          </Container>
        </Navbar>

    </Container>
  );
}

export default Header;