// Promise 预言  promise结构
// resolve成功  
// reject失败
// 成功失败在then有对应得函数体
new Promise((resolve,reject)=>{
	//异步函数
	$.ajax({
		url:'http://happymmall.com/user/get_user_info.do',
		type:'post',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err);
		}
	})
}).then((res)=>{
	console.log('success:',res)
},(err)=>{
	console.log('error:',err)
});

// 链式promise
	// 传统的方法
$.ajax({
	url:'http://happymmall.com/user/get_user_info.do',
	type:'post',
	success(res){
		$.ajax({
			url:'http://happymmall.com/user/get_product_count.do',
			type:'post',
			success(res){
				resolve(res);
			},
			error(err){
				reject(err);
			}
		})
	},
	error(err){
		reject(err);
	}
})

var PromiseFn1=new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://happymmall.com/user/get_user_info.do',
		type:'post',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err);
		}
	})
})
var PromiseFn2=new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://happymmall.com/cart/get_cart_product_count.do',
		type:'post',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err);
		}
	})
})

PromiseFn1.then(()=>{
	console.log('PromiseFn1 success');
	return PromiseFn2;
}).then(()=>{
	console.log('PromiseFn2 success')
})

