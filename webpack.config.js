const { ProvidePlugin } = require('webpack');
const babel = require('@webpack-blocks/babel6');
const sass = require('@webpack-blocks/sass');
const devServer = require('@webpack-blocks/dev-server2');
const {
  addPlugins,
  createConfig,
  defineConstants,
  env,
  entryPoint,
  setOutput,
  sourceMaps
} = require('@webpack-blocks/webpack2');

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./build/bundle.js'),
  babel(),
  sass(),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  addPlugins([
    new ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ]),
  env('development', [
    devServer(),
    sourceMaps()
  ])
]);
