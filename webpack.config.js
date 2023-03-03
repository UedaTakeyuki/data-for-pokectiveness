var ZipPlugin = require('zip-webpack-plugin');

// https://qiita.com/shin_moto/items/d75f1694bccf2bb4302d
module.exports = {
//  mode: 'development', // 開発モードか本番モードかを設定出来る
  mode: 'production', // 開発モードか本番モードかを設定出来る
  entry: './src/build-entry.js', // バンドルの起点となるファイル
  output: {
    library: 'Pokedex',
    libraryTarget: 'umd',
    filename: 'Pokedex.js',
    globalObject: 'this',
  },
  plugins: [
    new ZipPlugin({})
  ]
}