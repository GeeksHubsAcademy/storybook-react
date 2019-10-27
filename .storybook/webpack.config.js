module.exports = function({ config }) {
  config.module.rules.push({
    test: /(\.stories\.jsx?$)|(-story\.jsx?$)/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  return config;
};
