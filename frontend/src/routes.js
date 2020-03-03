import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './pages/signup'
import Login from './pages/login'
import Profile from './pages/profile'
import BusinessDetail from './pages/businessDetail'
import NotFound from './components/404/NotFound.js'
import ProfileConfig from './pages/profileConfig'

export default () => (
  
  <BrowserRouter>  
    <Navbar/>  
    <Switch>      
      <Route exact path="/" component={Home} />  
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} /> 
      <Route exact path="/businesslist/:id" component={BusinessDetail} /> 
      <Route exact path="/config" component={ProfileConfig} /> 

      <Route component={NotFound} />    
    </Switch> 
    < Footer /> 
  </BrowserRouter>
  )
