import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

//基础jsx、样式
let style={
	color:'r'+'ed'
}
let jsx=<div className='jsx' style={style}>jsx...</div>;
// render负责把jsx放到html  参数 渲染的组件
ReactDOM.render(
	jsx,
	document.getElementById('app')
);

//数据逻辑处理
let name='Rosen';
let names=['Rosen','Jack','Jim']
let flag=false;

// ()防止工具在代码里加分号，导致不必要的错误
// {} js逻辑
let jsx=(
	<div>
		{/*变量使用*/}
		<p>I am {name}</p>
		{/*条件判断*/}
		{
			flag?<p>I am {name}</p>:<p>I am not {name}</p>
		}
		{/*数组循环*/}	
		{
			names.map((name,index)=> <p key={index}>Hello,I am {name}</p>)
		}
	</div>
);

ReactDOM.render(
	jsx,
	document.getElementById('app')
);