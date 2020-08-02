const path = require('path');

const reactScriptsConfig = require('react-scripts/config/webpack.config');

module.exports = function () {
  const { plugins, resolveLoader, module } = reactScriptsConfig(
    process.env.NODE_ENV
  );

  return {
    name: 'server-side rendering',
    entry: ['./src/render.js'],
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'render'),
      filename: 'svg.js',
      libraryTarget: 'commonjs',
    },
    resolveLoader,
    module,
  };
};
