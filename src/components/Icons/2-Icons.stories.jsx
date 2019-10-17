import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';
import Check from './Check';
import Fail from './Fail';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: black;
  box-sizing: border-box;
  min-height: 90vh;
  & > * {
    height: 60px;
    width: 60px;
  }
`;

const decorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;
export default {
  title: 'Icons',
  decorators: [decorator],
};

export const _Spinner = () => <Spinner></Spinner>;
export const _SpinnerAdjustSizeToFather = () => (
  <>
    <div style={{ color: '#999', width: '50px', background: 'black' }}>
      <Spinner></Spinner>
    </div>
    <br />
    <div style={{ color: 'blue', height: '30px', background: '#aaa' }}>
      <Spinner></Spinner>
    </div>
    <br />

    <div
      style={{
        color: 'tomato',
        height: '30px',
        width: '150px',
        background: '#444',
      }}
    >
      <Spinner></Spinner>
    </div>
    <br />

    <div
      style={{
        color: 'tomato',
        height: '60px',
        width: '30px',
        background: '#444',
      }}
    >
      <Spinner></Spinner>
    </div>
  </>
);
export const _SpinnerStyles = () => (
  <Spinner
    style={{ color: 'blue', width: '160px', background: 'red' }}
  ></Spinner>
);
export const _Check = () => <Check></Check>;
export const _Fail = () => <Fail></Fail>;
