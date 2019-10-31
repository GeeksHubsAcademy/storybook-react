import React from 'react';
import { css } from 'styled-components';
import GridContainer from './GridContainer';
import 'styled-components/macro';

const GridItem = p => (
  <span
    {...p}
    css={`
      background-color: BlueViolet;
      border: 2px black solid;
      color: white;
      padding: 0.5em;
    `}
  />
);

export default {
  title: 'Layout|Grid',
};

const generateArray = (length, fn) => Array.from({ length }, fn);

export const defaultGrid = () => (
  <GridContainer>
    {generateArray(50, (_, i) => (
      <GridItem key={i}>{i}</GridItem>
    ))}
  </GridContainer>
);

export const setColumns = () => (
  <GridContainer columns='10'>
    {generateArray(50, (_, i) => (
      <GridItem key={i}>{i}</GridItem>
    ))}
  </GridContainer>
);

export const setTemplate = () => (
         //   template='grid-template-rows / grid-template-columns'
         //    https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
         <GridContainer
           template='1fr / 1fr 200px 2fr'
           css={css`
             background: grey;
           `}
         >
           {generateArray(5, (_, i) => (
             <GridItem key={i}>{i}</GridItem>
           ))}
           <a
             target='_blank'
             href='https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template'
           >
             https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
           </a>
         </GridContainer>
       );



export const setGap = () => (
  <GridContainer gap='10px 40px' columns='4'>
    {generateArray(16, (_, i) => (
      <GridItem key={i}>{i}</GridItem>
    ))}
  </GridContainer>
);



export const responsiveByMediaQuery = () => (
         <GridContainer
           columns='5'
           css={css`
             @media (max-width: 800px) {
               grid-template-columns: repeat(4, 1fr);
             }
             @media (max-width: 600px) {
               grid-template-columns: repeat(3, 1fr);
             }
             @media (max-width: 350px) {
               grid-template-columns: repeat(1, 1fr);
             }
           `}
         >
           {generateArray(20, (_, i) => (
             <GridItem key={i}>{i}</GridItem>
           ))}
         </GridContainer>
       );


export const responsiveByAutoFit = () => (
         <GridContainer
           template='1fr / repeat(auto-fit, minmax(150px, 1fr))'
         >
           {generateArray(20, (_, i) => (
             <GridItem key={i}>{i}</GridItem>
           ))}
         </GridContainer>
       );