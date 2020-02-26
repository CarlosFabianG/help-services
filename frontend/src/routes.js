import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar'
import Signup from './pages/signup'
import Login from './pages/login'
import Profile from './pages/profile'
import NotFound from './components/404/NotFound.js';

export default () => (
  
  <BrowserRouter>  
    <Navbar/>  
    <Switch>      
      <Route exact path="/" component={Home} />  
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />    
      <Route component={NotFound} />    
    </Switch>  
  </BrowserRouter>
  )
