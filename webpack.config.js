const { ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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

const htmlLoader = () => () => ({
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: ['html-loader']
      }
    ]
  }
});

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./build/bundle.js'),
  babel(),
  sass(),
  htmlLoader(),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  addPlugins([
    new ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    })
  ]),
  env('development', [
    devServer(),
    sourceMaps()
  ])
]);
