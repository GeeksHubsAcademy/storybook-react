import React from 'react';
// import { action } from '@storybook/addon-actions';
import Button from './ButtonFeedback';

const wait = delay => new Promise(res => setTimeout(res, delay, res));
const fail = delay => new Promise((res, rej) => setTimeout(rej, delay, res));

const randomFail = delay => (Math.random() > 0.5 ? wait(delay) : fail(delay));

export default {
  title: 'Buttons/ButtonFeedback',
};


export const Success = () => (
  <Button onClick={() => wait(2000)}>success</Button>
);

export const Fail = () => <Button onClick={() => fail(2000)}>fail</Button>;

export const InfiniteLoading = () => (
  <Button onClick={() => fail(99999999)}>infiniteLoading</Button>
);

export const OverrideStyle = () => (
  <Button
    onClick={() => randomFail(1000)}
    style={{ color: 'red', backgroundColor: '#222', fontSize: '40px' }}
  >
    Custom style
  </Button>
);

export const Inline = () => (
         <>
           <Button
             onClick={() => randomFail(1000)}
             style={{
               color: 'blue',
               backgroundColor: '#aaa',
               fontSize: '20px',
               fontFamily: 'Arial',
             }}
           >
             Custom style
           </Button>
            <Button
           onClick={() => randomFail(1000)}
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
           onClick={() => randomFail(1000)}
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
             onClick={() => randomFail(1000)}
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
           onClick={() => randomFail(1000)}
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
           onClick={() => randomFail(1000)}
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
           onClick={() => randomFail(1000)}
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


export const CustomFeedback = () => (
  <Button
    onClick={() => randomFail(1000)}
    style={{
      color: 'black',
      backgroundColor: 'white',
      fontSize: '40px',
    }}
    successIcon={<span className="emoji">❤️</span>}
    failIcon={<span className="emoji">💔</span>}
    loadingIcon={<span className="emoji">😒</span>}
  >
    custom success
  </Button>
);

//         <Button
//           onClick={() => wait(0)}
//           style={{ color: 'black', backgroundColor: 'white' }}
//         >
//           success
//         </Button>
//         <br />
//         <br />
//         <Button
//           onClick={() => wait(2000)}
//           style={{ color: 'grey', backgroundColor: 'black' }}
//         >
//           2 seg
//         </Button>
//         <br />
//         <br />
//         <Button
//           style={{ color: 'lime', backgroundColor: '#333', fontSize: '30px' }}
//           onClick={() => fail(1000)}
//         >
//           fail
//         </Button>
//         <br />
//         <br />

//         <Button
//           style={{ color: 'tomato', backgroundColor: '#333', fontSize: '20px' }}
//           onClick={() => fail(1000)}
//         >
//           fail
//         </Button>
//         <br />
//         <br />

//         <Button
//           style={{
//             color: 'white',
//             backgroundColor: 'tomato',
//             fontSize: '10px',
//           }}
//           onClick={() => fail(1000)}
//         >
//           fail
//         </Button>
//         <br />
//         <br />

//         <Button
//           style={{
//             color: 'white',
//             backgroundColor: 'transparent',
//             fontSize: '20px',
//           }}
//           onClick={() => fail(1000)}
//         >
//           fail
//         </Button>
//         <br />
//         <br />

//         <Button onClick={() => wait(9999999999)}>do not finish</Button>
