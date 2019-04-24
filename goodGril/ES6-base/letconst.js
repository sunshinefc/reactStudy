
// 箭头函数
// double函数名，x参数，2*x表达式

let value=2;
let double=x=>2*x;
let treble=x=>{
	return 3*x;
}
console.log('double:',double(value));
console.log('treble:',treble(value));

//没有独立作用域
var obj={
	commonFn:function(){
		console.log(this);
	},
	arrowFn:()=>{
		console.log(this);
	}
}
obj.commonFn();
obj.arrowFn();

// 基本用法
let str=`
<div>
	<h1 class="title">123</h1>
</div>
`;
document.querySelector('body').innerHTML=str;

//嵌套变量用法
let name='Rosen';
let str=`
<div>
	<h1 class="title">${name}</h1>
</div>
`;
document.querySelector('body').innerHTML=str;

//嵌套函数的用法
let  getName=()=>{
	return 'Rosen Test';
};
let str=`
<div>
	<h1 class="title">${getName()}</h1>
</div>
`;
document.querySelector('body').innerHTML=str;

//循环嵌套
let names=['Rosen','Geely','Jimin'];
let str=`
	<ul>
		${
			names.map(name=>`<li>Hi I am ${name}</li>`).join('')
		}
	</ul>
`;
document.querySelector('body').innerHTML=str;