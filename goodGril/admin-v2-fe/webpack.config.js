const path = require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'js/app.js'
  },
  resolve:{
	alias:{
		page:path.resolve(__dirname, 'src/page'),
		component:path.resolve(__dirname, 'src/component')
	}
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
	              limit: 8192,
	              name:'resource/[name].[ext]'
	            }
	          }
	        ]
	     },
        // 字体图标的配置
        {
	        test: /\.(eot|svg|ttf|woff|woff2|otf)$/i,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 8192,
	              name:'resource/[name].[ext]'
	            }
	          }
	        ]
	    }
	  ]
   },
  plugins: [
  	//独立css文件
  	new ExtractTextPlugin("css/[name].css"),
  	//处理html文件
  	new HtmlWebpackPlugin({
  		template:'./src/index.html',
		favicon: './favicon.ico'
  	}),
  	//提出公共模块
  	new webpack.optimize.CommonsChunkPlugin({
  		name:'Common',
  		filename:'js/base.js'
  	})
  ],
  //404的时候跳转到一个固定的页面
  devServer: {
    port:8086,
    historyApiFallback:{
    	index:'/dist/index.html'
    }
   }
};