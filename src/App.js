import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'typeface-pt-sans';

import './App.css';

import Navbar from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';

const Body = styled.div`
  margin-top: 50px;

  color: #808080;
  font-family: 'PT Sans';
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Body>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Body>
      </Router>
    );
  }
}

export default App;
