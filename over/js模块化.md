# module 模式

> 最开始，并没有出现模块化规范，一般使用一种 module 模式来解决 js 作用域污染问题

### 使用对象

> jq 比较出名

### 语法

```js
let myModule = (function (window) {
  let name = "module";
  function setName(value) {
    name = value;
  }
  return { setName }; // 将函数暴露
})(window);
```

# CommonJS

> 第一种比较规范的规范出现

### 使用对象

> nodejs 是主要实践者，使用 exports/require 进行引入导出

### 语法

```js
//文件x.js
let x = 1;
function add() {
  return ++x;
}
module.exports.x = x;
module.exports.add = add;
//也可以抛出对象
module.exports={
    x:x;
    add:add;
}


//文件main.js
let xm = require("./x.js");
console.log(xm.x);
console.log(xm.add());
```

# AMD

> - 使用了异步加载，模块被当作回调函数
> - 需要提前加载所有模块

# CMD

> - 同时支持同步和异步加载
> - 按需加载模块
> - 依赖就近书写

# es6 模块化

### 常规导入导出

- 导出`export let myName="name";`
- 导入`import {myName} from "./test.js"`

### 对象整体导入导出

- 导出

```js
let name = "name";
let getName = () => name;
export { name, getName };
```

- 导入

```js
import { name, getName } from "./test.js";
```

### 使用 as 重命名导入导出

- 导出时

```js
let name = "name";
let getName = () => name;
export { name as name_out, getName as getName_out };
```

- 导入时

```js
import { name as name_in, getName as getName_in } from "./test.js";
```

### 整体导入

```js
import * as all from "./test.js";
console.log(all.name);
```

### 默认导入导出

- 导入

```js
export default {
  name: "name",
  getName: function () {
    return this.name;
  },
};
```

- 导入

```js
import all from "./test.js"; //注意，默认导出不需要大括号
console.log(all.name, all.getName());
```
