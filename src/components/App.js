import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Tune from './Tune'

import Col from 'react-bootstrap/Col'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <Navigation></Navigation>
          </header>
            <Route path="/tune/edit" component={Tune} />
        </Router>
      </div>
    );
  }
}

export default App;
