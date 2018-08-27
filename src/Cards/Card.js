import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 10px auto;
  padding: 1em;
  height: auto !important;

  border: 2px solid #242424;
`;

const HeadImage = styled.img`
  height: 34px;

  display: block;
`;

const Divider = styled.div`
  width: calc(100% - 30px);
  height: 1px;

  margin: 10px auto;

  background-color: #242424;
`;

const CardText = styled.div`
  flex-grow: 1;

  color: #808080;
  font-size: 0.9em;
`;

const Button = styled(Link)`
  margin: 15px auto 0;
  padding: 5px;
  width: fit-content;

  background-color: #242424;
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

export default props => (
  <StyledCard className={props.className}>
    <HeadImage src={props.headImage} />
    <Divider />
    <CardText>{props.children}</CardText>
    <Button to={props.to || '/about'}>
      {props.buttonText || 'Find out more'}
    </Button>
  </StyledCard>
);
