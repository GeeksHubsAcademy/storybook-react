import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  padding: 0.5em 0.8em;

  border: 0.08em solid currentColor;
  border-radius: 0.2em;

  line-height: 1;
  color: inherit;
  text-transform: uppercase;
  cursor: pointer;
  ${({ disabled, loading }) =>
    disabled && !loading ? 'opacity:0.7; filter: blur(1px);' : ''}

  :focus,
  :active {
    box-shadow: 0 0 0 0.2rem ${({ style: { background = 'black', backgroundColor } = {} }) =>
      backgroundColor ? backgroundColor : background};
    outline: none;
  }

  & + & {
    margin-left: 0.5em;
  }
  ${({ style }) =>
    style &&
    style.display &&
    style.display.match('block') &&
    `& + & {
    margin-left: 0em;
  }`}

  :disabled {
    cursor: not-allowed;
  }
`;

export default Button;
