import React, { useState } from 'react';
import styled from 'styled-components';
import Autocomplete from './AutoComplete';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: black;
  box-sizing: border-box;
  min-height: 100vh;
`;

const decorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;
export default {
  title: 'Components/Form',
  decorators: [decorator],
};

const dataSource = [
  'ola',
  'olas',
  'hola caracola',
  'hola!',
  'hola.',
  'hola',
  'adios',
  'yei',
];

export const Default = () => {
  const [value, setvalue] = useState('');

  return <Autocomplete source={dataSource} value={value} onChange={setvalue} />;
};
