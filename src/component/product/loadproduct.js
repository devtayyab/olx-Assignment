import React from 'react';
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'


function Load(props){
    
    return(
        <Button variant="outline-secondary" onClick={Card2(props.productt)}  >Load More</Button>       
    )
}

function Card2(item){
 
 console.log(item.allitems) 
  return(
          <div className="pitems" >
            
            
        <ul >
          {Object.entries(item.allitems.allitems).map(([slug,{name,img,detail}])=>(
              
            <li key={slug} className="key" style ={{display: "inline-flex" , margin : "23px"}} >
            
              <Card style={{ width: '15rem'}}>
  <Card.Img variant="top"  src={img}/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    {detail}
    </Card.Text>
    
  </Card.Body>
</Card>

              

             
              </li>
             
          ))}
          </ul>
      </div>
    
  );
}

export {
    Load
};