import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './pages/signup'
import Login from './pages/login'
import Profile from './pages/profile'
import BusinessDetail from './pages/businessDetail'
import NotFound from './components/NotFound'
import ProfileConfig from './pages/profileConfig'
import CreateBusiness from './pages/createBusiness'
import MyBusiness from './pages/myBusiness'

export default () => (
  
  <BrowserRouter>  
    <Navbar/>  
    <Switch>      
      <Route exact path="/" component={Home} />  
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} /> 
      <Route exact path="/:id" component={BusinessDetail} /> 
      <Route exact path="/profile/config" component={ProfileConfig} /> 
      <Route exact path="/profile/create" component={CreateBusiness} />
      <Route exact path="/profile/mybusiness" component={MyBusiness} />
      <Route component={NotFound} />   
    </Switch> 
    < Footer /> 
  </BrowserRouter>
  )
