import React from 'react';
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
  z-index: 500;
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
`;

const StyledLogo = styled.img`
  margin-left: 15px;
  height: 34px;
`;

export default ({ navFunctions, isNavOpen }) => (
  <React.Fragment>
    <StyledNavbar>
      <Link to="/">
        <StyledLogo src={Logo} />
      </Link>
      <StyledHamburger
        className={isNavOpen ? 'active' : ''}
        src={Hamburger}
        onClick={navFunctions.toggleNav}
      />
    </StyledNavbar>
    <NavMenu isNavOpen={isNavOpen} navFunctions={navFunctions} />
  </React.Fragment>
);
