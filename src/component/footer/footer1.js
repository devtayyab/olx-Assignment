import React from 'react'
import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Img from '../../assets/footer.webp'
import appstore from '../../assets/appstore.webp'
import play from '../../assets/play.webp'


function Footer1(){

    return(
        <div style={{backgroundColor: "lightgray"}}>
   <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={Img} rounded />
    </Col>
    <Col xs={6} md={3}>
     <h1>TRY THE OLX APP</h1>
     <h6>Buy, sell and find just about anything using <br/> the app on your mobile.</h6>
    </Col>
    <Col xs={6} md={5}>
      <h3>GET YOUR APP TODAY</h3>
      <Image src={appstore} thumbnail />
      <Image src={play} thumbnail />
    </Col>
  </Row>
</Container>
        </div>
    )
}
export default Footer1;