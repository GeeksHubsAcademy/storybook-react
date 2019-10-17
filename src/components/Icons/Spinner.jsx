import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.span`
  color: inherit;
  svg {
    transform: translateZ(1px);
    animation: spin 5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    width: 100%;
    height: 100%;
  }
  svg > path {
    fill: currentColor;
  }
  @keyframes spin {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateZ(0deg);
    }
    50% {
      transform: rotateZ(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateZ(3600deg);
    }
  }
`;

export const Spinner = props => (
  <StyledSpinner {...props}>
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='spinner'
      className='svg-inline--fa fa-spinner fa-w-16'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z'
      ></path>
    </svg>
  </StyledSpinner>
);

export default Spinner;
