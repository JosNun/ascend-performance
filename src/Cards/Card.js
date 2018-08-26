import React from 'react'
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 10px auto;
  padding: 10px;
  height: auto !important;
  
  border: 2px solid #242424;
`

const HeadImage = styled.img`
  height: 34px;
  
  display: block;
`

const Divider = styled.div`
  width: calc(100% - 30px);
  height: 1px;
  
  margin: 10px auto;
  
  background-color: #242424;
`

const CardText = styled.div`
  flex-grow: 1;
  
  color: #808080;
  font-size: 0.9em;
`

const Button = styled.a`
  
  margin: 15px auto 0;
  padding: 5px;
  width: fit-content;
  
  background-color: #242424;
  color: #fff;
  text-align: center;
`


export default props => {
  return (
    <StyledCard className={props.className}>
      <HeadImage src={props.headImage} />
      <Divider />
      <CardText>{props.children}</CardText>
      <Button>{props.buttonText || 'Find out more'}</Button>
    </StyledCard>
  )
}
