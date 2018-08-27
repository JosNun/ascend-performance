import React from 'react';
import styled from 'styled-components';

import TextView from '../common/TextView';

const Subheader = styled.h3`
  margin-top: calc(50px + 1em);
  margin-bottom: 0.1em;
`;

const ModernHeader = styled.h1`
  margin-top: 0.1em;

  color: #242424;
  text-align: center;
`;

export default () => (
  <TextView>
    <Subheader>Sorry to disappoint but...</Subheader>
    <ModernHeader>Ascend doesn’t exist!</ModernHeader>
    <p>
      Ascend was just a demo project I built for experience and to expand{' '}
      <a href="https://josnun.github.io">my portfolio.</a>
    </p>

    <p>
      If you want to check out the code, or want more details on the tech stack,
      feel free to check this out on{' '}
      <a
        href="https://github.com/josnun/ascend-performance"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github.
      </a>
    </p>
  </TextView>
);
