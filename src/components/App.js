import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'
import Sidebar from './Sidebar'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <Navigation></Navigation>
          </header>
            <Sidebar></Sidebar>
            <div className="col-9">

            </div>
        </Router>
      </div>
    );
  }
}

export default App;
