import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import firebase from '../../config/firebaseconfig'
import {Link} from 'react-router-dom'
import '../../component/style.css'

class Login extends Component{
    constructor(props)
    {
        super(props)
        this.login=this.login.bind(this);
        this.Signup=this.Signup.bind(this);
        this.handlechange =this.handlechange.bind(this)
        this.state={
            email : "",
            password : ""
        }
    }
    login(e){
        // e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
            
                
            


        }
        ).catch((err)=>{
                console.log(err)
                alert(err.message)
        })
    }
    Signup(e){
        // e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
                console.log(u)
               
        }).catch((err)=>{
          alert(err.message)
        })
    }
    handlechange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){

 
    return(
        <div className="login">

<Form>
  
      <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handlechange} value={this.state.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password"  onChange={this.handlechange} value={this.state.password}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Link to="/logheader">
  <Button variant="primary" type="submit" onClick={this.login}>
    Log In
  </Button></Link>
  <Link to="/">
  <Button variant="primary" type="submit" onClick={this.Signup}>
    Sign Up
  </Button></Link>
</Form>
        </div>
    )
}
}
export default Login;