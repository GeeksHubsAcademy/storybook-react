import React from 'react';
import styled, { css } from 'styled-components';

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

  :hover:not(:disabled) {
    filter: brightness(85%);
  }
  :focus,
  :active {
    box-shadow: 0 0 0 1px
      ${({ style: { background = 'grey', backgroundColor } = {} }) =>
        backgroundColor ? backgroundColor : background};
    outline: none;
  }
  :disabled {
    cursor: not-allowed;
  }

  // layout
  & + & {
    margin-left: 0.5em;
  }
  ${({ style }) =>
    style &&
    style.display &&
    style.display.match('block') &&
    css`
      & + & {
        margin-left: 0em;
      }
    `}
`;

export default ({href,...props}) => href ? <Button {...props} href={href} as="a"/>: <Button {...props} /> ;
