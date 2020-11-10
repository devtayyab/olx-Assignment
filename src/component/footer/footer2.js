import React from 'react'
import {Row} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import appstore from '../../assets/appstore.webp'
import play from '../../assets/play.webp'




export const Footer2 = () =>{

    return(
     <div style={{backgroundColor: "grey"}}>   
  <Row>
    <Col xs={3} md={2}>
      <ul style={{listStyle :"none"}}>
          <li><h6>POPULAR CATOGARIES</h6></li>
          <li>cars</li>
          <li>flats for rent</li>
          <li>jobs</li>
          <li>mobile phones</li>
          <li></li>
      </ul>
    </Col>
    <Col xs={3} md={2}>
    <ul style={{listStyle :"none"}}>
          <li><h6>POPULAR CATOGARIES</h6></li>
          <li>cars</li>
          <li>flats for rent</li>
          <li>jobs</li>
          <li>mobile phones</li>
          <li></li>
      </ul>
    </Col>
    <Col xs={3} md={2}>
    <ul style={{listStyle :"none"}}>
          <li><h6>POPULAR CATOGARIES</h6></li>
          <li>cars</li>
          <li>flats for rent</li>
          <li>jobs</li>
          <li>mobile phones</li>
          <li></li>
      </ul>
    </Col>
    <Col xs={3} md={2}>
    <ul style={{listStyle :"none"}}>
          <li><h6>POPULAR CATOGARIES</h6></li>
          <li>cars</li>
          <li>flats for rent</li>
          <li>jobs</li>
          <li>mobile phones</li>
          <li></li>
      </ul>
    </Col>
    <Col xs={3} md={4}>
   <h6>FOLLOW US</h6>
   <Image src={appstore} thumbnail style={{width: "20%" , height : "30px"}} />
      <Image src={play} thumbnail style={{width: "20%" , height : "30px"}} />
    </Col>
  </Row>
  </div>
    )
    }