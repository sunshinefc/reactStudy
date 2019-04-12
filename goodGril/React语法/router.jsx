//页面路由
window.location.href='http://www.baidu.com';
history.back();

//hash路由
window.location='#hash';
window.onhashchange=function(){
	console.log('current hash:')
}