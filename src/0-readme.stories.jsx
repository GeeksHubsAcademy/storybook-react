import React from 'react';

import readmeTxt from '../readme.md';
import styled from 'styled-components';

const Wrapper = styled.pre`
  font-size: 0.8em;
`;

const decorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;
export default {
  title: 'Introduction',
  decorators: [decorator],
};


export const readme = () => readmeTxt;