import React from 'react'
import styled from 'styled-components';

const StyledText = styled.main`
  margin: 15px;
`

export default props => {
  return (
    <StyledText>
      {props.children}
    </StyledText>
  )
}
