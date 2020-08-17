# 原型

1. 函数使用`new`生成对象的时候，该函数被称为构造函数
2. 每个函数都有一个`prototype`对象，`prototype`对象中包含`constructor`属性，且其指向自身
3. 定义对象时，会自动生成一个`__proto__`属性，它指向构造函数的`prototype`对象，也就是`obj.__proto__===OBJ.prototype`
4. 任何对象最后的`__proto__`指向一定是`Object.prototype`
5. 对象本身查找不到属性时，会沿着原型逐级向上查找，这就是原型链

# 闭包

# 类与继承

### es5

### es6

# 迭代器

# promise

# Generator

# defineProperty

`语法说明`

1. 作用：`Object.defineProperty`的作用是，修改对象属性的属性（可访问性/可删除性等）
2. 语法：`Object.definePropery(obj,prop,desc)`
   > 参数含义：obj 是目标对象，prop 是目标属性，desc 是修改方案
3. 样例

```js
Object.defineProperty(person, "name", {
  value: 10,
  get: function () {
    return;
  },
});
```

`修改方案说明`

1. `value`，相当于配置赋值
2. `get()`，拦截取操作，需要返回值
3. `set()`，拦截存操作，但是会取消掉默认赋值操作，可以选择配置\_xxx 属性来间接拦截 xxx
4. `configrable`，是否可以删除目标属性或是否可以再次修改属性的属性
5. `enumerable`，此属性是否可以被枚举（使用 for...in 或 Object.keys()）
6. `writable`，属性的值是否可以被重写

`语法糖`

1. `Object.preventExtensions()`，禁止一个对象添加新属性
2. `Object.seal()`，调用`object.preventExtensions()`并把所有现有属性标记为`configurable:false`。
3. `Object.freeze()`调用 `Object.seal()`,并把所有现有属性标记为`writable: false`

# proxy

`语法说明`

1. 作用：代理一个对象，该代理被完全监听，可以读取到每个属性的 get/set，`proxy`和`obj`就像进行了浅拷贝，两者会互相影响
2. 语法：`let proxy=new Proxy(obj,handler)`

`代理get/set`

```js
let _person = {
  name: 11,
};
let person = new Proxy(_person, {
  get(target, prop) {
    target; //这是对象
    prop; //这是拦截的属性
    target[prop]; //这是本应读到的属性值
    return 0; //这是实际返回的属性值
  },
  set(target, prop, val) {
    val; //这是本应设定的值
    target[prop] = 0; //这是实际设定的值
    return true; //必须进行返回true，如果为false将报错
  },
});
```

`其他代理`

| 内部方法              | Handler 方法             | 何时触发                                                                                      |
| --------------------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| [[Get]]               | get                      | 读取属性                                                                                      |
| [[Set]]               | set                      | 写入属性                                                                                      |
| [[HasProperty]]       | has                      | in 操作符                                                                                     |
| [[Delete]]            | deleteProperty           | delete 操作符                                                                                 |
| [[Call]]              | apply                    | 函数调用                                                                                      |
| [[Construct]]         | construct                | new 操作符                                                                                    |
| [[GetPrototypeOf]]    | getPrototypeOf           | Object.getPrototypeOf                                                                         |
| [[SetPrototypeOf]]    | setPrototypeOf           | Object.setPrototypeOf                                                                         |
| [[IsExtensible]]      | isExtensible             | Object.isExtensible                                                                           |
| [[PreventExtensions]] | preventExtensions        | Object.preventExtensions                                                                      |
| [[DefineOwnProperty]] | defineProperty           | Object.defineProperty, Object.defineProperties                                                |
| [[GetOwnProperty]]    | getOwnPropertyDescriptor | Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries                          |
| [[OwnPropertyKeys]]   | ownKeys                  | Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object/keys/values/entries |

`reflect`

> 封装了`Object`的一些方法，更加健壮可靠，对于`proxy`操作来说，他有对应的所有操作
