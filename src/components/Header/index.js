import React, {useState} from "react";
import "./style.css";
import { Container, Navbar, Nav, NavDropdown, Image} from "react-bootstrap";


function Header(props) {

  const [expanded, setExpanded] = useState(false);

//   const navDropdownTitle = (<i class="fas fa-tachometer-alt"></i>);
  

  return (
    <Container>
      <Navbar className="Navbar-main"
        collapseOnSelect
        expand="sm"
        bg="light"
        variant="light"
        fixed="top"
        expanded={expanded}
      >
        <Navbar.Brand href="http://www.preprlabs.org" className="navbarBrand">
            <Image className="logo" src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/logo.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mt-1 mt-lg-0">
            <Nav.Link className="navLink" href="#" onClick={() => setExpanded(false)}><i class="fas fa-binoculars"></i>&nbsp;Explore</Nav.Link> 
            <NavDropdown className="dashboardLink" title={<div style={{display: "inline-block"}}><i class="fas fa-tachometer-alt"></i> My Dashboard </div>} onClick={() => setExpanded(false)}>
                <NavDropdown.Item href="#">User Dashboard</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="dashboardLink" title={<div style={{display: "inline-block"}}><i class="fas fa-cog"></i> Manage </div>} onClick={() => setExpanded(false)}>
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            </NavDropdown>
            <input className="searchBar" placeholder="Search Challenges, Labs, Projects and People"/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;