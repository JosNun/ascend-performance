import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavMenu from './NavMenu';

import Logo from '../assets/images/icons/logo.svg';
import Hamburger from '../assets/images/icons/hamburger.svg';

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;

  display: flex;
  align-items: center;

  background-color: #242424;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.5);
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 500;

  &.docked {
    box-shadow: none;
  }
`;

const StyledHamburger = styled.img`
  width: 24px;
  height: 20px;

  margin-right: 15px;
  margin-left: auto;

  cursor: pointer;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    transform: rotate(45deg);
  }

  @media screen and (min-width: 425px) {
    display: none;
  }
`;

const StyledLogo = styled.img`
  margin-left: 15px;
  height: 34px;
`;

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      isNavDocked: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    if (scrollTop > 5 && this.state.isNavDocked) {
      this.setState({
        isNavDocked: false,
      });
    } else if (scrollTop <= 5 && !this.state.isNavDocked) {
      this.setState({
        isNavDocked: true,
      });
    }
  }

  render() {
    const { isNavOpen, navFunctions } = this.props;
    return (
      <React.Fragment>
        <StyledNavbar className={this.state.isNavDocked ? 'docked' : ''}>
          {/* This goes first so we can use the sibling selector to set the z-index of the other elements */}
          <NavMenu isNavOpen={isNavOpen} navFunctions={navFunctions} />
          <Link to="/">
            <StyledLogo src={Logo} rel="preload" />
          </Link>
          <StyledHamburger
            className={isNavOpen ? 'active' : ''}
            src={Hamburger}
            onClick={navFunctions.toggleNav}
          />
        </StyledNavbar>
      </React.Fragment>
    );
  }
}

export default Nav;
