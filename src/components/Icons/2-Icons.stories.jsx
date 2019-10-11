import React from 'react';


import Spinner from './Spinner';
import Check from './Check';
import Fail from './Fail';

export default {
  title: 'Icons/Icons',
};

export const _Spinner = () => (
         <div style={{width:'40px',height:'40px'}}>
           <Spinner></Spinner>
         </div>
       );
export const _Check = () => <Check></Check>
export const _Fail = () => <Fail></Fail>