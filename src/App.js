import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/home';

function App() {
  return (
    // <Router>
    //       <Switch>
    //          <Route exact path="/" component={HomePage} />
    //         {/*<Route exact path="/login" component={LoginPage} />
    //         <Route exact path="/signup" component={SignUpPage} />
    //         <Route exact path="/logout" component={LogoutPage} />
    //         <Route component={Error404Page} /> */}

    //       </Switch>
    // </Router>
    <div>
      <HomePage/>
    </div>
    
  );
}

export default App;
