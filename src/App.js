import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          <li><Link to={'/about'} className="nav-link">About</Link></li>
        </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
