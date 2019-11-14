import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { setConsoleOptions } from '@storybook/addon-console';
import theme from './theme';
import './overrides.css';
// import '../src/servicies/logger.service';

// Option defaults:
addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme: theme,
    /**
     * function to sort stories in the tree view
     * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
     * if left undefined, then the order in which the stories are imported will
     * be the order they display
     * @type {Function}
     */
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : 1),
  },
});
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
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      newViewports,
    },
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
configure(
  require.context(
    '../src/',
    true,
    // /\.(stories)\.jsx?$/,

    // /react-use\/.*\.(stories|story)\.(js|jsx|ts|tsx)?$/,
    /\.(stories|story)\.[tj]sx?$/,
  ),
  module,
);
