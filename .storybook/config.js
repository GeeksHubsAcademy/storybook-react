import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {  addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { setConsoleOptions } from '@storybook/addon-console';

// addon console
setConsoleOptions({
  panelExclude: [],
});
// addon viewports
const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};
addParameters({
  viewport: { viewports: {
      ...INITIAL_VIEWPORTS,
      newViewports
    }
 },
});

// addon backgrounds
addParameters({
  backgrounds: [
    { name: 'transparent', value: 'transparent', default: true },
    { name: 'light', value: '#ddd' },
    { name: 'lightest', value: '#fff' },
    { name: 'dark', value: '#444' },
    { name: 'darkest', value: '#000' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// addon accessibility
addDecorator(withA11y);
addParameters({
  a11y: {
    // ... axe options
    element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {}, // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
});
// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
