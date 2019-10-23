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
  title: 'Form/FileInput',
  decorators: [decorator],
};

const handleChange = (e, results) => {
  e.preventDefault();
  results.forEach(result => {
    const [e, file] = result;
    console.log((e.target.result));
    console.log(`Successfully uploaded ${file.name}!`);
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
