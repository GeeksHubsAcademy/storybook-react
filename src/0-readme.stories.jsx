import React from 'react';

import readmeTxt from '../readme.md';
import styled from 'styled-components';
// import loggerService from './servicies/logger.service';

const Wrapper = styled.pre`
  font-size: 0.8em;
`;

const decorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;
export default {
  title: 'Introduction',
  decorators: [decorator],
};

// loggerService.log('hola');
// loggerService.error('hola');

export const readme = () => readmeTxt;