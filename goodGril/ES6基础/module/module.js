let str = 'string';
let obj = {
	name:'Rosen'
};
let fn = () => {
	console.log('module test')
}

export {
	str,
	obj,
	fn
}
//default模块里默认会输出的东西
export default {a:1}