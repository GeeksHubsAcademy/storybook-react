module.exports = function(api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = ['@babel/plugin-proposal-class-properties','babel-plugin-styled-components',"@babel/plugin-proposal-export-namespace-from"];
  return {
    presets,
    plugins,
    exclude: ['**/*stories.js'],
    minified:true,
    comments:false,
  };
};
