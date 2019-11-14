import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useMotion } from 'react-use';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const state = useMotion();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

storiesOf('Sensors|useMotion', module)
  .add('Docs', () => <ShowDocs md={require('./docs/useMotion.md')} />)
  .add('Demo', () => <Demo />);
