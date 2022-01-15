import React from "react";
import "./style.css";
import { Container, Navbar, Nav, NavDropdown, Image} from "react-bootstrap";


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
            </Navbar.Collapse>
            <div className="searchGroup">
              

                <button type="submit" className="submitButton"><i class="fa fa-search"></i></button>
                <input type="text" className="searchBar" placeholder="Search Challenges, Labs, Projects and People"/>

            </div>
        </Navbar>

    </Container>
  );
}

export default Header;