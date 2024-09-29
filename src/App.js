import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App(){
  return(
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Switch>
          <Route path="/" exaact component ={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />    
           </Switch>
      </div>
    </Router>
  );
}