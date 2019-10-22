import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
   margin:0;
 }
`;


const GridContainer = styled.div`

  display: grid;
  min-height:${({ height = '100%' }) => height};
  grid-template-columns: ${({ columns = 2 }) =>
    columns && `repeat(${columns}, 1fr)`};
  grid-template: ${({ template }) => template || ''};

  grid-gap: ${({ gap = 'initial' }) => gap};

  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  align-content: ${({ alignContents = 'center' }) => alignContents};

`;





 export default p => (
   <>
     <GlobalStyle {...p}/>
     <GridContainer {...p} />
   </>
 );
