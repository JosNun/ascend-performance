import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'typeface-pt-sans';

import './App.css';

import Navbar from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Footer from './common/Footer';

const Body = styled.div`
  min-height: 100%;

  margin-top: 50px;

  /* Footer height + margin */
  margin-bottom: calc(50px + 15px);

  color: #808080;
  font-family: 'PT Sans';
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      isNavOpen: false,
    };

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  openNav() {
    this.setState({
      isNavOpen: true,
    });
  }

  closeNav() {
    this.setState({
      isNavOpen: false,
    });
  }

  toggleNav() {
    const { isNavOpen } = this.state;
    this.setState({
      isNavOpen: !isNavOpen,
    });
  }

  render() {
    const { isNavOpen } = this.state;
    return (
      <Router>
        <Body>
          <Navbar
            navFunctions={{
              toggleNav: this.toggleNav,
              openNav: this.openNav,
              closeNav: this.closeNav,
            }}
            isNavOpen={isNavOpen}
          />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Footer updateMe={Math.random()} />
        </Body>
      </Router>
    );
  }
}

export default App;
