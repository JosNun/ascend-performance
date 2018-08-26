import React from 'react'
import styled from 'styled-components';



export default props => {
  const InputWithButton = styled.div`
    position: relative;
    width: 80%;
    height: 20px;
    
    margin: 10px auto;
    padding: 2.5px;
    
    border: 2px solid #242424;
  `
  
  const TextBox = styled.input.attrs({
    type: 'text',
    placeholder: props.placeholder,
  })`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2.5px;
    
    width: calc(100% - 20%);
    outline: none;
    
    border: none;
    font-weight: 700;
    
    &::placeholder {
      font-style: italic;
    }
  `
  
  const Button = styled.input.attrs({
    type: 'submit'
  })`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    
    width: 20%;
    
    background-color: #7e7;
    border: 2px solid #242424;
    border-width: 0 0 0 2px;
    font-weight: 700;
    font-style: italic;
  `
  
  return (
    <InputWithButton>
      <TextBox placeholder={props.placeholder} />
      <Button value="Join" />
    </InputWithButton>
  )
}
