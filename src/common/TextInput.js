import React from 'react';
import styled from 'styled-components';

const InputWithButton = styled.div`
  position: relative;
  width: 80%;
  height: 20px;
  max-width: 20em;

  margin: 10px auto;
  padding: 2.5px;

  border: 2px solid #242424;
`;

const TextBox = styled.input.attrs({
  type: 'text',
  placeholder: props => props.placeholder,
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

  &:focus:invalid + input[type='submit'] {
    background-color: #e77;
  }
`;

const Button = styled.input.attrs({
  type: 'submit',
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
  cursor: pointer;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:valid {
    background-color: #7e7;
  }
`;

export default ({ placeholder, name }) => (
  <InputWithButton>
    <TextBox placeholder={placeholder} name={name} type="email" required />
    <Button value="Join" />
  </InputWithButton>
);
