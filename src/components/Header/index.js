import React, {useState} from "react";
import "./style.css";
import { Container, Navbar, Nav, Image} from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Header(props) {

  const [expanded, setExpanded] = useState(false);

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
        <Navbar.Brand href="http://www.preprlabs.org" className="logo">
        <Image src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/logo.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mt-1 mt-lg-0">
            <NavLink className="navLink" to="/" onClick={() => setExpanded(false)}><img src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/explore.png" alt="Explore"/>&nbsp;Explore</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/" onClick={() => setExpanded(false)}><img src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/web-browser.png" alt="Dashboard" height="15px"/>&nbsp;My Dashboard</NavLink> &nbsp; &nbsp;
            <NavLink className="navLink" to="/design" onClick={() => setExpanded(false)}><img src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/settings.png" alt="Manage" height="15px"/>&nbsp;Manage</NavLink> &nbsp; &nbsp;
            <input placeholder="Search Challenges, Labs, Projects and People"/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;