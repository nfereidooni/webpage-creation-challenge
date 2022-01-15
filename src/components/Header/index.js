import React from "react";
import "./style.css";
import { Container, Navbar, Nav, NavDropdown, Image, Form, Button, FormControl} from "react-bootstrap";


function Header(props) {

  return (
    <Container>
      <Navbar className="Navbar-main"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Container fluid>
            <Navbar.Brand href="http://www.preprlabs.org" className="navbarBrand">
                <Image className="logo" src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/logo.png"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mt-1 mt-lg-0">
                <NavDropdown className="dashboardLink" id="collasible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-binoculars"></i>&nbsp;Explore</div>}>
                    <NavDropdown.Item href="#"><i class="fas fa-flask"></i>&nbsp;&nbsp;Labs</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-puzzle-piece"></i>&nbsp;&nbsp;Challenges</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-briefcase"></i>&nbsp;&nbsp;Organizations</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-journal-whills"></i>&nbsp;&nbsp;Resources</NavDropdown.Item>
                </NavDropdown>              
                <NavDropdown className="dashboardLink" id="collasible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-tachometer-alt"></i> My Dashboard </div>}>
                    <NavDropdown.Item href="#"><i class="fas fa-user"></i>&nbsp;&nbsp;User Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-project-diagram"></i>&nbsp;&nbsp;Projects</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-user-friends"></i>&nbsp;&nbsp;Team Matching</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-medal"></i>&nbsp;&nbsp;Achievements</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="dashboardLink" id="collasible-nav-dropdown" title={<div style={{display: "inline-block"}}><i class="fas fa-cog"></i> Manage </div>} >
                    <NavDropdown.Item href="#"><i class="fas fa-user"></i>&nbsp;&nbsp;Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#"><i class="fas fa-cog"></i>&nbsp;&nbsp;Settings</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="form-control me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><i class="fa fa-search"></i></Button>
            </Form>
            </Navbar.Collapse>

          </Container>
        </Navbar>

    </Container>
  );
}

export default Header;