import React , {useEffect, useState}from 'react';
import Card from 'react-bootstrap/Card'
import {Button  } from 'react-bootstrap'
import firebase from '../../config/firebaseconfig'
import {connect} from 'react-redux'
import img1 from '../../assets/sliderpic.PNG'

function Product({items}){
 
var  [value , setvalue] =useState([])
useEffect(() => {
  
    firebase.database().ref("items/").on("value", snapshot => {
      let allNotes = [];
    snapshot.forEach(snap => {
      allNotes.push(snap.val());
     
    });

    
    value= allNotes
    setvalue(value )
  }

  )})


  
 console.log(items)
    return(
      <div>
        <img src={img1} style={{maxWidth: "100%"}}></img>
          {value.map((v,i)=>
        <Card style={{ width: '16rem' , display: "inline-flex" ,margin: "2rem"}} key={i} >
        <Card.Img variant="top" src={v.img} style={{height: "17rem"}}/>
        <Card.Body>
          <Card.Title>{v.name}</Card.Title>
          <Card.Text style={{height: "5rem"}}>
            {v.detail}
          </Card.Text>
          <Button variant="primary">{`Price ${v.price}`}</Button>
        </Card.Body>
      </Card>
          )}
         </div>     
    )
          }
    const mapStateToProps=(state) =>{
        return {
          items : state
             }
}
 
export default connect(mapStateToProps, null)(Product)