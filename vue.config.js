const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './public/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './**/*.js'),
          path.join(__dirname, './src/**/*.js'),
        ], { nodir: true }),
      }),
    ],
  },
};
