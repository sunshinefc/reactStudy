
class Animal{
	constructor(name){
		this.name=name;

	}
	getName(){
		return this.name
	}
}

let animal=new Animal('animal test')
console.log(animal.getName())

// 用了extends  子类里没有this
class Animal{
	constructor(){
		this.name='animal';

	}
	getName(){
		return this.name
	}
}
class Cat extends Animal{
	constructor(){
		super()
		this.name='cat';
	}
	getName(){
		return this.name
	}
}
// 实例化类
let animal=new Animal()
let cat=new Cat()

//对象的用法
var name='Rosen',
	age=18;
var obj={
	name:name,
	age:age,
	getName:function(){
		return this.name;
	},
	getAge:function(){
		return this.age;
	}
}

let name='Rosen',
	age=18;
let obj={
	//变量名可以直接用作对象的属性名称
	name,
	age,
	// 对象里的方法简写
	getName(){
		return this.name;
	},
	//表达式作为属性名或方法名
	['get'+'age'](){
		return this.age;
	}
}
//Object对象的扩展
// 一个对象的所有属性名
Object.keys(obj)
// 把几个对象做一个整合(有重叠，会覆盖)
Object.assign({a:1},{b:2})

