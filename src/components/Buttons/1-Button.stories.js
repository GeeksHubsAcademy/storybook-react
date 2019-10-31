import React from 'react';
// import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Components|Buttons/Button',
};

export const DefaultButton = () => <Button>Clickme</Button>;

export const DisabledButton = () => <Button disabled>disabled</Button>;

export const DisabledButtonBig = () => (
         <Button
           disabled
           style={{ color: 'green', backgroundColor: '#000', fontSize: '80px' }}
         >
           Custom style
         </Button>
       );
export const AsLink = () => (
  <Button
    href="http://geekshubs.com"
    target="_blank"
  >
    I am a link because I have a prop href
  </Button>
);

export const OverrideStyle = () => (
  <Button
    style={{ color: 'red', backgroundColor: '#222', fontSize: '40px' }}
  >
    Custom style
  </Button>
);

export const Inline = () => (
         <>
           <Button
             style={{
               color: 'blue',
               backgroundColor: '#aaa',
               fontSize: '20px',
               fontFamily: 'Helvetica',
             }}
           >
             Custom style
           </Button>
           <Button
             style={{
               color: 'violet',
               backgroundColor: 'yellow',
               fontSize: '20px',
               fontFamily: 'Helvetica',
             }}
           >
             Custom style
           </Button>
           <Button
             style={{
               color: 'WHITE',
               backgroundColor: 'black',
               fontSize: '20px',
               textTransform: 'none',
               fontFamily: 'monospace',
             }}
           >
             Custom style
           </Button>
         </>
       );


export const Blocks = () => (
         <>
           <Button
             style={{
               color: 'blue',
               backgroundColor: '#aaa',
               fontSize: '20px',
               fontFamily: 'Arial',
               display:'block'
             }}
           >
             Custom style
           </Button>
            <Button
           style={{
             color: 'violet',
             backgroundColor: 'yellow',
             fontSize: '20px',
             fontFamily: 'Helvetica',
             display:'block'
           }}
         >
           Custom style
         </Button>
         <Button
           style={{
             color: 'WHITE',
             backgroundColor: 'black',
             fontSize: '20px',
             textTransform: 'none',
             fontFamily: 'monospace',
             display:'block'
           }}
         >
           Custom style
         </Button>
         </>
       );

export const BigWithWrap = () => (
         <Button
           style={{
             color: 'blue',
             backgroundColor: 'transparent',
             fontSize: '130px',
             fontFamily: 'Sans',
             fontWeight: '800',
           }}
         >
           Custom style
         </Button>
       );
