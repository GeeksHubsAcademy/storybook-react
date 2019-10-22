import React from 'react';
import styled from 'styled-components';
import AutoComplete from './AutoComplete';


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
  title: 'Components/Form',
  decorators: [decorator],
};

const dataSource = [
    'hola',
    'adios',
    'yei'
]

export const Default = () => (
         <AutoComplete
        //    getItemValue={item => item.label}
        //    items={[{ label: 'apple' }, { label: 'banana' }, { label: 'pear' }]}
        //    renderItem={(item, isHighlighted) => (
        //      <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
        //        {item.label}
        //      </div>
        //    )}
        //    value={value}
        //    onChange={e => (value = e.target.value)}
        //    onSelect={val => (value = val)}
         />
       );
