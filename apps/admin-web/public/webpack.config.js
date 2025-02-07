const path = require('path');

const appPath = '/apps/admin-web';

module.exports = {
  entry: `.${appPath}/public/src/app.module.js`,
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', '..', '..', `${appPath}/public/dist`),
    clean: true,
  },
  resolve: {
    extensions: ['.pug', '.css', '.ts', '.js'],
    preferRelative: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.pug$/,
        use: ['@webdiscus/pug-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: true,
  },
};
