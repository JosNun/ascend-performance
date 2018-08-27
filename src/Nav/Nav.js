import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const StyledLogo = styled.img`
  margin-left: 15px;
  height: 34px;
`;

export default () => (
  <StyledNavbar>
    <Link to="/">
      <StyledLogo src={Logo} />
    </Link>
    <StyledHamburger src={Hamburger} />
  </StyledNavbar>
);
