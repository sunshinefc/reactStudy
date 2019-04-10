//查看cookie
document.cookie
//添加cookie
document.cookie='name=Rosen;domain=happymmall.com;path=/index.html;expires=Tue, 09 Apr 2020 03:42:18 GMT'

// 修改cookie

document.cookie='name=Rosen1;domain=happymmall.com;path=/index.html;'

//删除cookie  过期时间设置到之前的日期 或 过期时间设成0
document.cookie='name=Rosen1;domain=happymmall.com;path=/index.html;;expires=Tue, 09 Apr 2017 03:42:18 GMT'