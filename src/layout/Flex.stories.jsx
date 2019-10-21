import React from 'react';
// import { css } from 'styled-components';
import FlexContainer from './FlexContainer';
import 'styled-components/macro';
const FlexItem = (p) => <span {...p}  css={`background-color:purple; border: 2px black  solid; color:white;; padding:0.5em;`}/>;

export default {
  title: 'Layout/Flexbox',
};

const generateArray = (length, fn) => Array.from({ length }, fn);

export const asRow = () => (
  <FlexContainer>
    {generateArray(10, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);

export const asRowWithoutWrap = () => (
  <FlexContainer>
    {generateArray(50, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);

export const asRowWithWrap = () => (
  <FlexContainer wrap>
    {generateArray(50, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);

export const growAll = () => (
  <FlexContainer grows>
    {generateArray(4, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);

export const growOneChild = () => (
  <FlexContainer grows='2'>
    {generateArray(4, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);

export const growManyChild = () => (
  <FlexContainer grows={[1,4]}>
    {generateArray(4, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);

export const growAsColumn = () => (
  <FlexContainer grows={[2]} column height='100vh'>
    {generateArray(4, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);




export const justifyContentSpaceAround = () => (
  <FlexContainer justifyContent='space-around'>
    {generateArray(4, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);


export const justifyContentCenter = () => (
  <FlexContainer justifyContent='center'>
    {generateArray(4, (_, i) => (
      <FlexItem key={i}>{i}</FlexItem>
    ))}
  </FlexContainer>
);



export const AlignItemsCenter = () => (
         <FlexContainer
           alignItems='center'
           height='200px'
           css={`
             border: 2px solid grey;
           `}
         >
           {generateArray(4, (_, i) => (
             <FlexItem key={i}>{i}</FlexItem>
           ))}
         </FlexContainer>
       );