// 引入的时候  str改名字为string(as)
import {str as string,obj,fn} from './module.js'
// 引入默认 名字可以随意起
import foo from './module.js'


console.log('name:', obj.name);
console.log('string:', string);
console.log('fn:', fn);
console.log(foo)
