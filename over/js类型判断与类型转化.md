# 类型判断

### `typeof`

> - 用法：`typeof(xxx)`
> - 返回值：返回除`null`外的 7 种基本类型，外加`function`共 8 种
> - 特殊点：`null`被 js 判断为`object`

### `instanceof`

> - 用法：`xxx instanceof OBJ`
> - 返回值：返回目标对象（左）的原型链上是否存在 OBJ（右），`true/false`
> - 特殊点：只用于检验对象，检验简单类型时无效

### `Object.prototype.toString.apply()`

> - 用法：`Object.prototype.toString.apply(xxx)`
> - 返回值：基本数据类型加 js 中的原生对象
> - 特殊点：不能检测自定义的对象，自定义的 class 将返回 `function`

# 类型转化

### 转为`Number`型

> - `string`

    >  若字符串整体可以识别为一个数字，则返回该识别
    >  若不能识别为数字，则返回 `NaN`
    >  可以识别 `Infinity`
    >  字符串为空或者为空字符串时，返回 0
    >  使用`parseInt()`进行转化时，直接从开头开始截取能识别的字符串，直到不能识别为止

> - `boolean`中，`false`返回`0`，`true`返回`1`
> - `null`返回`0`
> - `undefined`返回`NaN`
> - `Object`在下方单独说明

### 转化为`String`型

> - `number` ，`boolean`， `null`， `undefined`将原封不动的转化为带引号的字符串
> - `Object`在下方单独说明

### 转化为`Boolean`型

> - `0`， `undefined`， `null` ，`""` ，`NaN` 将被转为 false，其他均为 true

### 转化为对象

> - `null`，`undefined`进行转化将抛出错误
> - 其他型进行转化会返回包装后的对象

# `Object`转化为`String/Number`

### 转为 String：`toString()`

> - `toString()`流程，如果它返回一个原始值，将这个原始值转换为字符串返回，若不为原始值，则以相同流程执行 `valueOf()`，若都不为原始值，抛出错误
> - `Object`返回`"[object Object]"`
> - `Array`返回`this.join()`的值
> - `Function`返回整个函数字符串

### 转为 Number：`valueOf()`

> - `valueOf()`流程，如果它返回一个原始值，将这个原始值转换为字符串返回，若不为原始值，则以相同流程执行 `toString()`，若都不为原始值，抛出错误
> - `Object`返回对象本身
> - `Array`返回数组本身
> - `Function`返回方法本身

# 隐式类型转化

### `算数运算符（+ - * / ++ %...）`

> - `+`时，若两边存在字符串，则另一个也会转化为字符串，进行字符串拼接
> - 其他情况，均转为`Number`型

### `关系运算符（> < == !=...）`

> - `===/!==`时，不进行转化
> - `!`时，转化为`boolean`型
> - `==`时 null 和 undefinde 相等，NaN 和任意比较都是 false
> - 其他情况，均转为`Number`型
