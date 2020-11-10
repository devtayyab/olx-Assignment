import React from 'react';
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'

const Navbar = () =>{
    return(
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <NavDropdown  href="/home" title="ALL CATEGORIES" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Vehicles</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Animal</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Services</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Property For Rent</NavDropdown.Item>
      </NavDropdown>
  <Nav.Item>
    <Nav.Link eventKey="mobile" >Mobile Phones</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Cars</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-">Motorcycles</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Houses</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link">Tablets</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled">
      Land Photos
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
}
export default Navbar;