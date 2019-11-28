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
  title: 'Components|Form/Autocomplete',
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

  return (
    <Autocomplete
      source={dataSource}
      value={value}
      onChange={setValue}
    />
  );
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
  const [value, setValue] = useState({ value: 'hola' });

  return (
    <Autocomplete
      source={dataSourceObj}
      value={value}
      onChange={setValue}
      // mapItemToValue={item => item.value}
    />
  );
};

export const HandleNullValue = () => {
  const [value, setValue] = useState({ value: 'hola' });

  return (
    <Autocomplete
      source={dataSourceObj}
      value={undefined}
      onChange={setValue}
    />
  );
};

export const setValueFromOutside = () => {
  const [value, setValue] = useState(dataSourceObj[0]);

  return (
    <>
      <button onClick={() => setValue(dataSourceObj[3])}>
        change value
      </button>
      <Autocomplete
        source={dataSourceObj}
        value={value}
        onChange={setValue}
        mapItemToValue={item => item.value}
      />
    </>
  );
};

export const variosInline = () => {
  const [value, setValue] = useState(dataSourceObj[0]);

  return (
    <>
      <Autocomplete
        source={dataSourceObj}
        value={value}
        onChange={setValue}
        mapItemToValue={item => item.value}
      />
      <Autocomplete
        source={dataSourceObj}
        value={value}
        onChange={setValue}
        mapItemToValue={item => item.value}
      />
      <Autocomplete
        source={dataSourceObj}
        value={value}
        onChange={setValue}
        mapItemToValue={item => item.value}
      />
    </>
  );
};

export const customOnBlur = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <h6>Value selected: {value}</h6>
      <Autocomplete
        source={[1, 2, 3, 45, 67, 89, 100]}
        value={value}
        onChange={setValue}
        onBlur={setValue}
      />
    </>
  );
};

export const customOnEnter = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <h6>Value selected: {value}</h6>
      <Autocomplete
        source={[1, 2, 3, 45, 67, 89, 100]}
        value={value}
        onChange={setValue}
        onBlur={setValue}
        onEnter={setValue}
      />
    </>
  );
};
