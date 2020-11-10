import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import signin from '../../assets/sign in.PNG'
import SellItem from '../sell items/index'

import './style.css'


const Headerrlog=() =>{
  return(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">OLX</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <NavDropdown title="Pakistan" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Punjab</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sindh</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">KPK</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Islamabad</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Find Cars , Mobile Phones and more...." className="mr-md-2" style={{width:800}}/>
      <Button variant="outline-success">Search</Button>
      
      <Nav.Link href="#home" ><img src="https://www.iconninja.com/files/616/221/174/avatar-account-profile-user-person-face-emoji-icon.png" style={{width: "20px", height: "30px"}}></img></Nav.Link>
      <Link to="/sell">
      <Button variant="outline-gray" onClick={SellItem}><img src={signin}></img></Button></Link>
    </Form>
  </Navbar.Collapse>
</Navbar>

  )
}

export default Headerrlog
