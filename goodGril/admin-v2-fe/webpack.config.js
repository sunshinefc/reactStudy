const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
	  rules: [
	  //react（jsx）语法处理
	    {
	      test: /\.m?jsx$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env','react']
	        }
	      }
	    },
	    //css文件处理
	    {
	      test: /\.css$/,
	      use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	      })
	    },
	    //sass文件处理
	    {
            test: /\.scss$/,
            use:ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: ["css-loader","sass-loader"]
	      }) 
        },
        // 图片的配置
        {
	        test: /\.(png|jpg|gif)$/i,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 8192
	            }
	          }
	        ]
	    }
	  ]
   },
  plugins: [
  	new ExtractTextPlugin("index.css"),
  	new HtmlWebpackPlugin({
  		template:'./src/index.html'
  	})
  ]
};