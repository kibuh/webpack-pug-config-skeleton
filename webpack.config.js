const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
entry: ['@babel/polyfill', './Src/js/app.js'],
  output: {
    path: path.resolve(__dirname, './Dist'),
    filename: './js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:'babel-loader'
      },
      {
          test:/\.pug$/,
          use:'pug-loader'
      },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },

  plugins:[

    new HtmlWebpackPlugin(),
    
    
    
    new HtmlWebpackPlugin({
        template:'./Src/views/about.pug',
        filename:'about.html'
    }),

    new HtmlWebpackPlugin({
        template:'./Src/views/contact.pug',
        filename:'contact.html'
    }),

    new HtmlWebpackPlugin({
      template:'./Src/views/templates/header.pug',
    }),
  
    new HtmlWebpackPlugin({
    template:'./Src/views/templates/footer.pug',
    }),

    new HtmlWebpackPlugin({
      template:'./Src/views/templates/base.pug',
    }),

    new HtmlWebpackPlugin({
      template:'./Src/views/templates/index.pug',
      filename:'index.html'
}),

  ]

}

