import React from 'react';
import './App.css';
import Nav from './nav'
import Home from './home'
import Project from './project'
import Service from './service'
import Contact from './contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
