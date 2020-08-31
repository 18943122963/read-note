## 原型链继承

- 核心：设定其原型指向`Student.prototype = new Person();`
- 缺点：共享父类引用属性的值

## 构造函数继承

- 核心：在子类构造函数中使用`Person.call(this)`
- 缺点：只能继承构造函数的属性

## 组合继承

- 核心：在子类构造函数中使用`Person.call(this)`，设定其原型指向`Student.prototype = new Person()`
- 缺点：调用了两次构造函数

## 原型式继承

- 核心：封装函数容器

```js
function content(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
```

- 缺点：共享父类引用属性的值

## 寄生式继承

- 核心：在原型式继承后再加入传参部分

```js
//原型式继承
function content(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
//传参
function content_arg(obj) {
  let obj_plus = content(obj);
  obj_plus.name = "aaa";
  return obj_plus;
}
let person = new Person();
let student = new content_arg(person);
```

- 缺点：共享父类引用属性的值
