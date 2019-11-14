const { compilerOptions } = require('../tsconfig.json');
const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.md?$/,
    loader: 'markdown-loader',
  });
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    include: [SRC_PATH],
    options: {
      transpileOnly: true, // use transpileOnly mode to speed-up compilation
      compilerOptions: {
        ...compilerOptions,
        declaration: false,
      },
    },
  });

  return config;
};
