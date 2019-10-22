import React from 'react';

import styled, { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
   margin:0;
 }
`;


const growChild = num => `
  & > *:nth-child(${num}) {
    flex: 1;
  }
`;

const FlexContainer = styled.div`

  display: flex;
  min-height:${({ height = '100%' }) => height};
  flex-direction: ${({ column }) => column && 'column;'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  align-content: ${({ alignContents = 'center' }) => alignContents};

  ${({ grows }) =>
    grows === true &&
    css`
      & > * {
        flex: 1;
      }
    `}
  ${({ grows }) => +grows >= 0 && growChild(grows)}

  ${({ grows = [] }) =>
      Array.isArray(grows) && ''.concat(...grows.map(growChild))}


`





 export default p => (
   <>
     <GlobalStyle {...p}/>
     <FlexContainer {...p} />
   </>
 );
