import React, { useState } from 'react';
import styled from 'styled-components';
import Autocomplete from './Autocomplete';

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
  title: 'Form/Autocomplete',
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
  const [value, setValue] = useState('ola');

  return <Autocomplete source={dataSource} value={value} onChange={setValue} />;
};


const dataSourceObj = [
  { value: 'ola' },
  { value: 'olas' },
  { value: 'hola caracola' },
  { value: 'hola!' },
  { value: 'hola.' },
  { value: 'hola' },
  { value: 'adios' },
  { value: 'yei' },
];


export const SourceAsObjects = () => {
  const [value, setValue] = useState({value:'hola'});

  return (
    <Autocomplete
      source={dataSourceObj}
      value={value}
      onChange={setValue}
      mapItemToValue={item => item.value}
    />
  );
};
