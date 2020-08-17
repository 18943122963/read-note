# 默认绑定

```js
function foo() {
  console.log(this.a);
}
var a = 1;
foo(); // 2
```

# 隐式绑定

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
obj.foo(); // 2
```

# 隐式丢失问题

> 在我的理解中，函数传递时，只传递了函数本身，而不传递其上下文，所以造成了丢失

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"
```

# 显示绑定

> 直接把对象绑定到函数上，强行获得上下文

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2
```

# 硬绑定

> 硬绑定的对象无法再修改 this

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var bar = function () {
  foo.call(obj);
};
bar(); // 2
// 硬绑定的 bar 不可能再修改它的 this
bar.call(window); // 2
```

# new 绑定

> 1. 创建一个空对象
> 2. 将其原型指向构造函数
> 3. 绑定构造函数的 this
> 4. 返回 new 的对象

# 优先级

> new > 显示绑定 > 隐式绑定 > 默认绑定
