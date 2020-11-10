import React from 'react'
import {connect} from 'react-redux'
import {set_data} from '../../store/action'
import Headerr from '../header/header'
import Headerrlog from '../header/headerlog'
import Navbar from '../navbar/index'
import Product from '../product/product'
// import {Detail} from '../product/detail'
import {Load} from '../product/loadproduct'
import Footer1 from '../footer/footer1'
import {Footer2} from '../footer/footer2'
import SellItem from '../../component/sell items/index'
import WriteUserDat from '../../store/action/index'
import Login from '../log in/login'
import { BrowserRouter as Router,
 RouteProps,
  Route,
 Switch
  
  } from "react-router-dom";
 
 
  
class Main extends React.Component {


  render(){
   
  var dataa = this.props  
  console.log(dataa.name.record)
  console.log(window.location.href)
  return (
    
      
    
    
    <Router>
     

    <div className="App">
   
   <Route path="/" exact> <Headerr />  
    <Navbar></Navbar>
    
        
      <Product productt={dataa}></Product>
        <Load productt={dataa}></Load>
        <Footer1></Footer1>
        <Footer2></Footer2>
       </Route>
       <Route path="/logheader" exact> <Headerrlog />  
    <Navbar></Navbar>
    
        
      <Product productt={dataa}></Product>
        <Load productt={dataa}></Load>
        <Footer1></Footer1>
        <Footer2></Footer2>
       </Route>
    <Route path="/sell" exact>
      <SellItem></SellItem>
    </Route>
    <Route path="/Login" exact>
      <Login></Login>
    </Route>
    
        
     
     
    </div>
    </Router>
  );
  }
  
  }
const mapStateToProps = (state) => (
  {
   name : state.mobile,
   allitems :state.allitems

   
  })
  // const mapDispatchToProp = (dispatch) => (
  //  {
  //   set_data: (data) => dispatch(set_data(data))
  //  })
  
   
  

export default connect(mapStateToProps,null)(Main)
