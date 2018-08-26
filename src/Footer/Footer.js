import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  right: 0;
  left: 0;
  
  margin-top: 30px;
  padding: 15px;
  
  background-color: #242424;
  color: #fff;
  text-align: center;
`

export default () => {
  return (
    <StyledFooter>
      © 2018 Josiah Nunemaker
    </StyledFooter>
  )
}
