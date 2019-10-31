import React, { useState } from 'react';
import styled from 'styled-components';
import FileInput from './FileInput';

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
  title: 'Components|Form/FileInput',
  decorators: [decorator],
};

const handleChange = (results) => {
  results.forEach(result => {
    const [data, metadata] = result;
    console.log(data);
    console.log(`Successfully uploaded ${metadata.name}!`);
  });
};

export const FileInputDefault = () => (
         <>
           <label htmlFor='my-file-input'>Upload a File:</label>
           <FileInput as='text' id='my-file-input' onChange={handleChange}>
             {/* <button>Select a file!</button> */}
           </FileInput>
         </>
       );


export const FileInputChildren = () => (
         <>
           <FileInput as='text' id='my-file-input' onChange={handleChange}>
             <a href="#">upload</a>
           </FileInput>
         </>
       );
