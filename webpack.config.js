// 讓你可以動態插入 bundle 好的 .js 檔到 .index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

// entry 為進入點，output 為進行完 eslint、babel loader 轉譯後的檔案位置
module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: './dist',
    filename: 'index_bundle.jsx'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: './src',
        exclude: /bundle\.jsx$/
      }
    ],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets: ['es2015', 'react']}
      },
      {
        test: /\.s?css$/, loader: 'style!css!sass'
      }
    ],
  },
  // 啟動開發測試用 server 設定（不能用在 production）
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 9453
  },
  plugins: [HTMLWebpackPluginConfig]
};
