import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import './index.scss';
// react语法 dom元素只能有一层
ReactDOM.render(
	<div>
		<i className="fa fa-bandcamp"></i>
		<h1>hello react!</h1>,
	</div>,
	document.getElementById('app')
);