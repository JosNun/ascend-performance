import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #242424;

  opacity: 0;
  transform: translateY(-50%);
  transform-origin: top center;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  z-index: 499;

  &.open {
    box-shadow: 0 2px 1em rgba(0, 0, 0, 0.8);
    opacity: 1;
    transform: translateY(0);
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  &:before {
    content: '';
    width: calc(100% - 30px);
    height: 2px;

    margin: auto;

    background-color: #77ee77;
  }
`;

const NavElement = styled(NavLink)`
  position: relative;

  margin: 5px;
  padding: 0.2em;

  color: #77ee77;

  &:last-child {
    margin-bottom: 1em;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -1em;
    top: 50%;
    width: 0.5em;
    height: 0.5em;

    background-color: #77ee77;
    opacity: 0;
    transform: translateY(-50%) rotate(45deg) scale(0);
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active:before {
    opacity: 1;
    transform: translateY(-50%) rotate(45deg) scale(1);
  }
`;

const NavBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: none;

  /* background-color: rgb(255, 0, 0, 0.2); */
  z-index: 495;

  &.open {
    display: block;
  }
`;

export default ({ isNavOpen, navFunctions }) => (
  <React.Fragment>
    <NavContainer className={isNavOpen ? 'open' : ''}>
      <NavElement exact to="/" onClick={navFunctions.closeNav}>
        Home
      </NavElement>
      <NavElement to="/about" onClick={navFunctions.closeNav}>
        About
      </NavElement>
    </NavContainer>
    <NavBg
      className={isNavOpen ? 'open' : ''}
      onClick={navFunctions.closeNav}
    />
  </React.Fragment>
);
