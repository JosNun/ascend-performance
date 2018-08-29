import React from 'react';
import styled from 'styled-components';

import workout from '../assets/images/workout.jpg';

const StyledHeader = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 500px;
`;

const HeaderImage = styled.img`
  display: block;
  margin-top: -15%;
  width: 100%;

  transform: scale(1.02);
  filter: blur(1px);
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  background-color: rgba(0, 0, 0, 0.3);
`;

const HeaderCallout = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;

  display: block;
  margin: 0;

  color: #fff;
  font-size: 7vw;
  font-weight: 500;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
  transform: translate(-50%, -50%);

  @media screen and (min-width: 512px) {
    font-size: 2.5em;
  }
`;

export default () => (
  <StyledHeader>
    <HeaderImage src={workout} />
    <Overlay />
    <HeaderCallout>
      Enabling{' '}
      <b>
        <i>YOU</i>
      </b>{' '}
      to do more
    </HeaderCallout>
  </StyledHeader>
);
