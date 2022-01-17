import React from "react";
import "./style.css";
import { Container, Navbar, Nav, NavDropdown, Image, Form, Button, FormControl } from "react-bootstrap";
import userImage from "../assets/img/IMG_Niki.jpg"

function Header(props) {
  
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
            <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
              <Nav className="me-auto mt-1 mt-lg-0">
                  <NavDropdown className="dashboardLink" id="collaspible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-binoculars"></i>&nbsp;Explore</div>}>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-flask"></i></span>Labs</NavDropdown.Item>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-puzzle-piece"></i></span>Challenges</NavDropdown.Item>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-briefcase"></i></span>Organizations</NavDropdown.Item>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-journal-whills"></i></span>Resources</NavDropdown.Item>
                  </NavDropdown>              
                  <NavDropdown className="dashboardLink" id="collapsible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-tachometer-alt"></i> My Dashboard </div>}>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-user"></i></span>User Dashboard</NavDropdown.Item>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-project-diagram"></i></span>Projects</NavDropdown.Item>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-user-friends"></i></span>Team Matching</NavDropdown.Item>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-medal"></i></span>Achievements</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className="dashboardLink" id="collapsible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-cog"></i> Manage </div>} >
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-user"></i></span>Profile</NavDropdown.Item>
                      <NavDropdown.Item href="#"><span className="icon"><i class="fas fa-cog"></i></span>Settings</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Form className="searchBar d-flex">
                <FormControl
                  type="search"
                  placeholder="Search Challenges, Labs, Projects and People"
                  className="form-control"
                  aria-label="Search"
                />
                <Button variant="outline-success"><i class="fa fa-search"></i></Button>
              </Form>
              <Nav className="mt-1 mt-lg-0">
                  <NavDropdown className="userMenu" id="collapsible-nav-dropdown" title={<div style={{display: "inline-block"}}><Image src={userImage} width="40" roundedCircle/></div>}>
                      <NavDropdown.Item className="userMenuItem" href="#"><span className="icon"><i class="fas fa-user"></i></span>My Info</NavDropdown.Item>
                      <NavDropdown.Item className="userMenuItem" href="#"><span className="icon"><i class="fas fa-question-circle"></i></span>Help</NavDropdown.Item>
                      <NavDropdown.Item className="userMenuItem" href="#"><span className="icon"><i class="fas fa-inbox"></i></span>Inbox</NavDropdown.Item>
                      <NavDropdown.Item className="userMenuItem" href="#"><span className="icon"><i class="far fa-newspaper"></i></span>Newsfeed</NavDropdown.Item>
                      <NavDropdown.Item className="userMenuItem" href="#"><span className="icon"><i class="far fa-bell"></i></span>Notifications</NavDropdown.Item>
                      <NavDropdown.Item className="userMenuItem" href="#"><span className="icon"><i class="fas fa-cog"></i></span>Settings</NavDropdown.Item>
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