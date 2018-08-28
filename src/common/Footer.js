import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  right: 0;
  left: 0;

  margin-top: 30px;
  padding: 15px;

  background-color: #242424;
  color: #808080;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #fff;
`;

export default () => (
  <StyledFooter>
    © 2018{' '}
    <FooterLink
      href="https://josnun.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      Josiah Nunemaker
    </FooterLink>
  </StyledFooter>
);
