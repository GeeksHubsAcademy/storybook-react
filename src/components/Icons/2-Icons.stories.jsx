import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';
import Check from './Check';
import Fail from './Fail';

const Wrapper = styled.div`
  display: flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items:center;
  color:black;
  box-sizing:border-box;
  min-height:90vh;
  & > span {
    height: 40px;
    width: 40px;
  }

`;

const decorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;
export default {
  title: 'Icons',
  decorators: [decorator],
};

export const _Spinner = () => <Spinner></Spinner>;
export const _Check = () => <Check></Check>;
export const _Fail = () => <Fail></Fail>;
